import { Component } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";

export interface User {
  uaccount: string;
  upwd: string;
  umail: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  uaccount = '';
  upwd = '';
  uuser: User | null = null;
  showSuccessModal = false;
  showErrorModal = false;
  errorMessage  = '';
  successMessage = '';

  constructor(private http: HttpClient,
               private router: Router,){}
  loginUser(uaccount: string ,upwd: string){
    //實現登錄功能
    const url = 'http://localhost:8081/login';
    const user = {uaccount, upwd};
    this.http.post(url, user).subscribe(
      (response: any) => {
        console.log(response);
        this.uuser = response;

        this.showSuccessModal = true;
        this.successMessage = '登錄成功！'
      },
      (error) =>{
        console.error('錯誤：', error);
        this.showErrorModal = true;
        this.errorMessage = '登陸失敗，請檢查用戶名和密碼！';
        this.uaccount = '';
        this.upwd = '';
      }
    );
  }

  closeSuccessModal(){
    this.showSuccessModal = false;
    this.router.navigate(['/home'], {queryParams:{uuser:JSON.stringify(this.uuser)}
    });
  }

  closeErrorModal(){
    this.showErrorModal = false;
  }
}
