import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoDataService } from './service/data/todo-data.service';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  { path: '' , component : LoginComponent},
  { path: 'login', component : LoginComponent},
  { path: 'welcome/:username', component: WelcomeComponent, canActivate: [RouteGuardService]},
  { path: 'list', component: ListToDoComponent, canActivate: [RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  { path: 'list/:id', component: TodoComponent, canActivate: [RouteGuardService]},
  { path: '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
