import { Component, signal, inject } from '@angular/core';
import { manejoflujoService } from '../../services/manejo-flujo.service';

@Component({
  selector: 'Element-lista-flujo-movimientos',
  imports: [],
  templateUrl: './lista-Flujo-Movimientos.component.html',
})
export class ListaFlujoMovimientosComponent {
  // injeccion de servicio
  flujoService = inject(manejoflujoService);

  // meses del año
  meses: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  // Obtener mes actual
  mes_Actual = signal<number>(new Date().getMonth() + 1)
  // Obtener el número de días del mes actual
  dias_Mes_Actual = signal<number>(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate());
  // Obtener el día actual del mes
  dia_Actual = signal<number>(new Date().getDate());

  // Lista de flujo del mes
  lista_Flujo_Mes = signal<FlujoMovimientos[]>([]);

  // Al iniciar el componente, cargar la lista de flujo del mes actual
  ngOnInit() {
    this.cargar_Lista_Flujo_Mes(this.mes_Actual());
  }

  // Función para cargar la los dias de flujo del mes
  cargar_Lista_Flujo_Mes(mes: number) {
    for (let dia = 1; dia <= this.dias_Mes_Actual(); dia++) {
      const flujo_Dia: FlujoMovimientos = {
        fecha: `${dia}-${this.meses[mes - 1]}`,
        ganancias: 0,
        gastos: 0,
        total: 0
      };
      this.lista_Flujo_Mes.update(lista => [...lista, flujo_Dia]);
    }
  }
 }
