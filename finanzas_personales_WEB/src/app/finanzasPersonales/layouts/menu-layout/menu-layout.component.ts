import { Component } from '@angular/core';
import { NavbarComponentComponent } from "../../components/navbar-component/navbar-component.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-layout',
  imports: [NavbarComponentComponent, RouterOutlet],
  templateUrl: './menu-layout.component.html'
})
export class MenuLayoutComponent { }
