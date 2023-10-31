import {Component} from "@angular/core";

@Component({
  selector:'app-myc04',
  templateUrl:'./myc04.component.html',
  styleUrls:['./myc04.component.css'],
})
export class MyC04Component{
  count = 3
  imgUrl = '1.jpg'   //或者'../assets/1.jpg'（不推薦）

  zengjia(){
    this.count++
  }
  jianshao(){
    this.count--
  }
}
