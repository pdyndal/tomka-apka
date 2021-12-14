import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {TodoListComponent} from "./todo-list/todo-list.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: ':id', children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'todos', component: TodoListComponent},
    ]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
