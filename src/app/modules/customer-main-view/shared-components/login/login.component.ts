import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() email: string = "";
  @Input() password: string = "";
  loginUrl = 'http://localhost:5000/auth/login'

  message: string = ""
  messageIsVisible: boolean = true






  submit(): void {
    console.log("username")
    console.log(this.email)
    console.log("password")
    console.log(this.password)


    let loginData = {
      email: this.email,
      password: this.password
    };
    
     let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    };
    

    try {
      console.log(loginData)
      console.log(this.loginUrl)
      fetch(this.loginUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          console.log(data);
          if(data.message){
            this.message = data.message;
          }
          if(data.error){
            this.message = data.error;
          }
        })
        
    } catch (error) {
      // Handle any other errors that occur during the try block


      console.log('Error:', error);
    }
  }
}
