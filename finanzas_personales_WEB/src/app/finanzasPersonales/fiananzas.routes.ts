import { Routes } from '@angular/router';
import FlujoFinanzasComponent from './pages/flujoFinanzas/flujoFinanzas.component';
import { MenuLayoutComponent } from './layouts/menu-layout/menu-layout.component';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';

export const finanzazRoutes: Routes = [
  {
    path: '',
    component: MenuLayoutComponent,
    children: [
      {
        path: 'flujos',
        component: FlujoFinanzasComponent,
      },
      {
        path: 'movimientos',
        component: MovimientosComponent,
      },
      {
        path: 'cuentas',
        component: CuentasComponent,
      },
      {
        path: '**',
        component: FlujoFinanzasComponent,
      },
    ],
  },
];
export default finanzazRoutes;
