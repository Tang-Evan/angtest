import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import {response} from "express";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  uaccount = '';
  upwd = '';
  umail = '';
  accountMessage : { message: string } | null = null;
  showSuccessModal = false;
  showErrorModal = false;
  errorMessage  = '';
  successMessage = '';

  constructor(private http: HttpClient,
              private router: Router,){}

  checkAccount(){
    const url = `http://localhost:8081/checkAccount?uaccount=${this.uaccount.trim()}`
    const params = {
      checkuaccount: this.uaccount.trim()
    };
    this.http.get(url,{ params }).subscribe(
      (response: any) =>{
        this.accountMessage = response;
        console.log("賬號：" + this.uaccount.trim())
      },
      (error) =>{
        console.error('錯誤：',error);
      }
    )
  }

  registerUser(uaccount: string, upwd: string ,umail: string){
    //實現注冊功能
    const url = 'http://localhost:8081/register';
    const user = {uaccount,upwd,umail};
    this.http.post(url, user).subscribe(
      (response: any) =>{
        console.log(response);
        this.showSuccessModal = true;
        this.successMessage = '注冊成功！';
      },
      (error) =>{
        console.error('錯誤：',error);
        this.showErrorModal = true;
        this.errorMessage = '注冊失敗，請使用尚未注冊的用戶名及密碼！'
        this.uaccount = ''; // 清空輸入框内容
        this.upwd = '';
        this.umail = '';
      }
    );
  }

  closeSuccessModal(){
    this.showSuccessModal = false;
    this.router.navigate(['/login']);
  }

  closeErrorModal(){
    this.showErrorModal = false;
  }

}
