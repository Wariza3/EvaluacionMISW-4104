import { Component } from '@angular/core';
import { CafesModule } from './cafes/cafes.module';

@Component({
  imports: [CafesModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
