import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your perfect Banking partner"

  acno = ''
  psw = ''


  constructor(private router:Router,private ds:DataService) {}

  ngOnInit(): void {
  }

  login() {
    var acnum=this.acno
    var psw=this.psw

   const result= this.ds.login(acnum,psw)

   if(result){
    alert('login success')
    this.router.navigateByUrl('dashboard')
   }

  
  // login(a:any,b:any) {

  //   var acnum=a.value
  //   var psw=b.value
  //   var userdetails=this.userdetails
  //   if(acnum in userdetails)
  //   {
  //     if(psw==userdetails[acnum]['password'])
  //     {
  //       alert("login success")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert('Account number not exist')
  //   }

  // }
  }

}
