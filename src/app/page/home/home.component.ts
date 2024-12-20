import { Component } from '@angular/core';

// Route เพื่อเปลี่ยนไปหน้าอื่นๆ
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // constructor จะทำงานก่อนทุกครั้ง เมื่อเรียกใชเงาน class นี้
  constructor (private router : Router) {

  }

  text_home : string = 'this is HOME page.'


  // function เปิดหน้า gachapong
  go_to_gachapong_page () {
    console.log("go to gachapong page")
    this.router.navigateByUrl('/gachapong');
  }
}
