import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {BusinessListComponent} from "./pages/business/business-list/business-list.component";
import {BusinessCreateEditComponent} from "./pages/business/business-create-edit/business-create-edit.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'business', pathMatch: 'full'},
      {path: 'business', component: BusinessListComponent},
      {path: 'business/create', component: BusinessCreateEditComponent},
      {path: 'business/:id/edit', component: BusinessCreateEditComponent}
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
