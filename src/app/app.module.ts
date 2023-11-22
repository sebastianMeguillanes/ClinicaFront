// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EscritorioModule } from './modules/escritorio/escritorio.module';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from '../app/modules/auth.interceptor';
import { AuthService } from '../app/modules/auth.service';
import { AuthGuard } from '../app/modules/auth-guard.service'; // Ajusta la ruta según tu estructura
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    EscritorioModule,
    RouterModule ,
    NgxPaginationModule,
  ],
  providers: [
    AuthService,
    AuthGuard, // Agrega el guardia de ruta a los providers
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
