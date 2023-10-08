import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { DoctorComponent } from './modules/doctor/doctor.component';
@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),

  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

