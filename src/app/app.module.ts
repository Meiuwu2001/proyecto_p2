import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './view/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidebarComponent } from './view/sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ProductFormComponent } from './view/product-form/product-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmacionComponent } from './view/confirmacion/confirmacion.component';
import { LoginComponent } from './view/login/login.component';
import { UsersComponent } from './view/users/users.component';
import { RegisterComponent } from './view/register/register.component';
import { ConfirmacionuserComponent } from './view/confirmacionuser/confirmacionuser.component';
import { VentasComponent } from './view/ventas/ventas.component';
import { ProductCardComponent } from './view/product-card/product-card.component';
import { CartComponent } from './view/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SidebarComponent,
    ProductFormComponent,
    ConfirmacionComponent,
    LoginComponent,
    UsersComponent,
    RegisterComponent,
    ConfirmacionuserComponent,
    VentasComponent,
    ProductCardComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatPaginator,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule { }
