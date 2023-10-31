import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  uuaccount = '';
  uumail = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe((params) => {
      if(params['uuser']){
        try {
          const uuserData = JSON.parse(params['uuser']);
          this.uuaccount = uuserData.uaccount;
          this.uumail = uuserData.umail;
        }catch (error) {
          //JSON 解析失敗，處理錯誤
          console.error('JSON解析錯誤', error);
        }
      }
    })
  }
}
