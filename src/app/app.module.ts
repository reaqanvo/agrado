import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosSidebarComponent } from './components/articulos/articulos-sidebar/articulos-sidebar.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MenuDropdownComponent } from './components/menu-dropdown/menu-dropdown.component';
import { ArticulosSideBar2Component } from './components/articulos/articulos-side-bar2/articulos-side-bar2.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArticulosSidebarComponent,
    ArticulosComponent,
    MenuDropdownComponent,
    ArticulosSideBar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
