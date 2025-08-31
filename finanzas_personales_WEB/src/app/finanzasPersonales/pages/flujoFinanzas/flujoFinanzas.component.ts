import { Component } from '@angular/core';
import { ListaFlujoMovimientosComponent } from '../../components/lista-Flujo-Movimientos/lista-Flujo-Movimientos.component';

@Component({
  selector: 'flujo-finanzas',
  imports: [ListaFlujoMovimientosComponent],
  templateUrl: './flujoFinanzas.component.html'
})
export default class FlujoFinanzasComponent { }
