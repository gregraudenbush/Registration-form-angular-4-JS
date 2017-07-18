import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = []
  user = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "", 
    address: "",
    city: "",
    state: ""
  }
  success = ""
  onSubmit(){
    console.log("on submit")
    this.users.push(this.user)
    this.success = "Thank you for registering with us " + this.user.first_name + ".  We just sent you a confirmation email at " + this.user.email + ", and we will send all mail to " + this.user.address + ", " + this.user.city + ", " + this.user.state
    this.user = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",  
    address: "",
    city: "",
    state: ""
    }
    
  }
}
