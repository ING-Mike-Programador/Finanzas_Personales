import { Component, inject } from '@angular/core';
import { manejoflujoService } from '../../services/manejo-flujo.service';

@Component({
  selector: 'Element-lista-flujo-movimientos',
  imports: [],
  templateUrl: './lista-Flujo-Movimientos.component.html',
})
export class ListaFlujoMovimientosComponent {
  flujoService = inject(manejoflujoService);
 }
