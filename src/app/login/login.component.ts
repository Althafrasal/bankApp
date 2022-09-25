import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your perfect Banking partner"

  acno = ''
  psw = ''

  userdetails:any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 100000 },
    1001: { acno: 1001, username: "anu", password: 123, balance: 200000 },
    1002: { acno: 1002, username: "joyal", password: 123, balance: 150000 },
    1003: { acno: 1003, username: "anagha", password: 123, balance: 100000 }
  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    var acnum=this.acno
    var psw=this.psw
    var userdetails=this.userdetails
    if(acnum in userdetails)
    {
      if(psw==userdetails[acnum]['password'])
      {
        alert("login success")
      }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert('Account number not exist')
    }

  }
  acnoChange(event: any) {
    this.acno = event.target.value;
  }
  pswChange(event: any) {
    this.psw = event.target.value
  }

}
