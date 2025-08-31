import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class manejoflujoService {

  // Obtener mes actual
  mes_Actual = signal<number>(new Date().getMonth() + 1)
  // Obtener el número de días del mes actual
  dias_Mes_Actual = signal<number>(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate());
  // Obtener el día actual del mes
  dia_Actual = signal<number>(new Date().getDate());


  // Lista de flujo del mes
  lista_Flujo_Mes = signal<FlujoMovimientos[]>([]);
}
