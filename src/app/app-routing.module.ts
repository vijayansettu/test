import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
//import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'userlist-component', component:  UserlistComponent},
  { path: 'userprofile-component', component: UserprofileComponent },
  //{ path: '', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
 
}
