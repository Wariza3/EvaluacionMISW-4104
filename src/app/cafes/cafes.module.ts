import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CafesListComponent } from './cafes-list/cafes-list.component';

@NgModule({
  declarations: [CafesListComponent],
  exports: [CafesListComponent],
  imports: [CommonModule],
})
export class CafesModule {}
