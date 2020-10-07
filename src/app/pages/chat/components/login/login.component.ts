import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const BACKEND_URL = 'http://localhost:3000';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  text = localStorage.getItem("userdata");
  users = JSON.parse(this.text);
  username = "";
  email = "";
  userArray:Array<{username:String,email:String}> = [];

  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  submit(){
    let user = {username:this.username, email: this.email};
    this.httpClient.post(BACKEND_URL + '/login', user, httpOptions)
    .subscribe((data:any)=>{
      alert("posting: " + JSON.stringify(user));
      alert("postRes: " + JSON.stringify(data));

      if (data.ok){
        alert("correct");
        sessionStorage.setItem('userid', data.userid.toString());
        sessionStorage.setItem('userlogin', data.ok.toString());
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('email', data.email.toString());
        sessionStorage.setItem('title', data.title.toString());
        
        this.router.navigateByUrl("/account");
      } else {
        alert("email of password incorrect");
      }
    });
  }

}
