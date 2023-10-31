//裝飾器（Decorator）——用於指定class的用途
import {Component} from "@angular/core";

//組件 = 模板 + 脚本 + 樣式

@Component({
  template: '<h2>我的組件C01</h2><hr>',
  selector: 'myc01',
  // templateUrl: './app.component.html',
})
export class MyC01Component{

}

/*
<div myTitle="xxx"></div>
<myc01></myc01>
<p class ="myc01"></p>
 */
