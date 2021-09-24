import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BusinessListComponent } from './pages/business/business-list/business-list.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
