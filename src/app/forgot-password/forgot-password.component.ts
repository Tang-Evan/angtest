import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  uaccount = '';
  showSuccessModal = false;
  showErrorModal = false;
  errorMessage  = '';
  successMessage = '';

  constructor(private http: HttpClient,
               private  router: Router,){}
  changeUpwd(uaccount: string){
    //實現忘記密碼功能
    const url = 'http://localhost:8081/forgotPassword';
    const user = {uaccount};
    this.http.post(url, user).subscribe(
      (response: any) =>{
        console.log(response);
        this.showSuccessModal = true;
        this.successMessage = '修改成功！';
      },
      (error) =>{
        console.error('錯誤：',error);
        this.showErrorModal = true;
        this.errorMessage = '修改失敗，請使用已注冊的用戶名！'
        this.uaccount = ''; // 清空輸入框内容
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
