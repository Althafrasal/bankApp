import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any
  currentAcno: any

  userdetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 100000, transaction: [] },
    1001: { acno: 1001, username: "anu", password: 123, balance: 200000, transaction: [] },
    1002: { acno: 1002, username: "joyal", password: 123, balance: 150000, transaction: [] },
    1003: { acno: 1003, username: "anagha", password: 123, balance: 100000, transaction: [] }
  }

  constructor() { }
  register(acno: any, username: any, password: any) {
    let userdetails = this.userdetails
    if (acno in userdetails) {
      return false
    }
    else {
      userdetails[acno] = { acno, username, password, balance: 0 }
      console.log(userdetails);

      return true
    }
  }
  login(acnum: any, psw: any) {

    var userdetails = this.userdetails

    if (acnum in userdetails) {
      if (psw == userdetails[acnum]['password']) {
        this.currentUser = userdetails[acnum]['username']
        this.currentAcno=acnum
        return true
      }
      else {

        alert("incorrect password")
        return false
      }
    }
    else {

      alert('Account number not exist')
      return false
    }

  }
  deposit(acnum: any, pswrd: any, amnt: any) {
    let userdetails = this.userdetails
    var amount = parseInt(amnt)
    if (acnum in userdetails) {
      if (pswrd == userdetails[acnum]['password']) {
        userdetails[acnum]['balance'] += amount
        userdetails[acnum]['transaction'].push({ type: 'CREDIT', amount })
        return userdetails[acnum]['balance']
      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('user not exist')
      return false
    }
  }
  withdraw(acnum1: any, pswrd1: any, amnt1: any) {
    let userdetails = this.userdetails
    var amount = parseInt(amnt1)
    if (acnum1 in userdetails) {
      if (pswrd1 == userdetails[acnum1]['password']) {
        if (userdetails[acnum1]['balance'] >= amnt1) {
          userdetails[acnum1]['balance'] -= amount
          userdetails[acnum1]['transaction'].push({ type: 'DEBIT', amount })

          return userdetails[acnum1]['balance']
        }
        else {
          alert('insufficient balance')
        }

      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('user not exist')
      return false
    }
  }
  getTransactions(acno:any){
    return this.userdetails[acno]['transaction']

  }
}
