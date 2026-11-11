import { Component, OnInit, inject, signal } from '@angular/core';
import { Cafe } from '../cafe';
import { CafesService } from '../cafes.service';

@Component({
  selector: 'app-cafes-list',
  standalone: false,
  styleUrl: './cafes-list.component.css',
  templateUrl: './cafes-list.component.html',
})
export class CafesListComponent implements OnInit {
  private readonly cafesService = inject(CafesService);

  cafes = signal<Cafe[]>([]);
  cantidadCafeOrigen = signal(0);
  cantidadCafeBlend = signal(0);
  isLoading = signal(true);
  errorMessage = signal('');

  ngOnInit(): void {
    this.cafesService.getCafes().subscribe({
      next: (cafes) => {
        this.cafes.set(cafes);
        this.cantidadCafeOrigen.set(cafes.filter(
          (cafe) => cafe.tipo === 'Café de Origen',
        ).length);
        this.cantidadCafeBlend.set(cafes.filter(
          (cafe) => cafe.tipo === 'Blend',
        ).length);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('No fue posible cargar el listado de cafés.');
        this.isLoading.set(false);
      },
    });
  }
}
