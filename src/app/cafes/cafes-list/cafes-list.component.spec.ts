import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Cafe } from '../cafe';
import { CafesModule } from '../cafes.module';
import { CafesService } from '../cafes.service';
import { CafesListComponent } from './cafes-list.component';

describe('CafesListComponent', () => {
  const cafes: Cafe[] = [
    {
      id: 1,
      nombre: 'Café de prueba 1',
      tipo: 'Blend',
      region: 'Antioquia',
      sabor: 'Chocolate',
      altura: 1800,
      imagen: '',
    },
    {
      id: 2,
      nombre: 'Café de prueba 2',
      tipo: 'Café de Origen',
      region: 'Caldas',
      sabor: 'Caramelo',
      altura: 1700,
      imagen: '',
    },
    {
      id: 3,
      nombre: 'Café de prueba 3',
      tipo: 'Café de Origen',
      region: 'Huila',
      sabor: 'Frutal',
      altura: 1900,
      imagen: '',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafesModule],
      providers: [
        {
          provide: CafesService,
          useValue: { getCafes: () => of(cafes) },
        },
      ],
    }).compileComponents();
  });

  it('renders three coffee rows and one header row', async () => {
    const fixture = TestBed.createComponent(CafesListComponent);

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const table = fixture.nativeElement.querySelector('table') as HTMLTableElement;

    expect(table.querySelectorAll('thead tr').length).toBe(1);
    expect(table.querySelectorAll('tbody tr').length).toBe(3);
    expect(table.querySelectorAll('tr').length).toBe(4);
  });
});
