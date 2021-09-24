import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BusinessListComponent } from './pages/business/business-list/business-list.component';
import {ControlMessagesComponent} from "./components/validation-messages/validation-messages.component";


// SERVICES
import {ApiService} from "./service/api.service";
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusinessCreateEditComponent } from './pages/business/business-create-edit/business-create-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BusinessListComponent,
    BusinessCreateEditComponent,
    ControlMessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule ,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
