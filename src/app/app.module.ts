import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '../material.module';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { MessagesComponent } from './messages/messages.component';
import { InputOutPutComponent } from './input-out-put/input-out-put.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'group', component: GroupComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'InputOutput', component: InputOutPutComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GroupComponent,
    MessagesComponent,
    InputOutPutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
