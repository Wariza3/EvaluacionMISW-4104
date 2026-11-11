import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cafe } from './cafe';

const CAFES_API_URL =
  'https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json';

@Injectable({ providedIn: 'root' })
export class CafesService {
  private readonly http = inject(HttpClient);

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(CAFES_API_URL);
  }
}
