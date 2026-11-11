import { Component, OnInit, inject } from '@angular/core';
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

  cafes: Cafe[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.cafesService.getCafes().subscribe({
      next: (cafes) => {
        this.cafes = cafes;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar el listado de cafés.';
        this.isLoading = false;
      },
    });
  }
}
