import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './dashboard/header.component';
import { Dashboard } from './dashboard/dashboard.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'dashboard', component: Dashboard },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
