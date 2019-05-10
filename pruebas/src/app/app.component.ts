import { Component } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
users: string[] =['ryan', 'joe','cameron'];


deleteuser(user){
 for( let i=0;i< this.users.length;i++)
 if(user == this.users[i]){

  this.users.splice(i,1);
 }
}

addUser(newUser){
 this.users.push(newUser.value);


  return false;
}
}
