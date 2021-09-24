import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {BusinessListComponent} from "./pages/business/business-list/business-list.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'business', pathMatch: 'full'},
      {path: 'business', component: BusinessListComponent}
    ]
  },
  {path: '**', redirectTo: '/business'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
