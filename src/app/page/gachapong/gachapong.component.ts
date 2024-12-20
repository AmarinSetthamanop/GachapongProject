import { Component, OnInit } from '@angular/core';

// Angular sersion 16+ มีการเปลี่ยนแปลงการใช้งาน ngModule เช่น ngIf, ngFor หรืออื่นๆ ดังนั้น class ไหนต้องการใช้งาน จะต้อง import มาไว้ใน class นั้น
import { CommonModule } from '@angular/common';

// หน้าตา ui ปุ่มกด tag HTML <button></botton>
import {MatButtonModule} from '@angular/material/button';

// หน้าตา ui icon tag <mat-icon></mat-icon>
import {MatIconModule} from '@angular/material/icon';

// Router ตัวเปลี่ยนหน้า (ต้องกำหนด path แต่ละหน้าไว้ที่ app.tourer.ts ก่อน)
import { Router } from '@angular/router';

// (GreenSock Animation Platform) ตัวจัดการ Animation
import { gsap } from "gsap";



@Component({
  selector: 'app-gachapong',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule], // ngModule
  templateUrl: './gachapong.component.html',
  styleUrl: './gachapong.component.scss'
})


export class GachapongComponent implements OnInit { // เรียกใช้งาน class OnInit เพื่อใช้งาน function ngOnit

  // constructor จะทำงานก่อนเสมอเมื่อเรียกใช้งาน class นี้
  constructor (private router : Router) {}

  // สร้าง list ของรูปภาพ เครื่องเล่น Gachapong และชื่ออุปกรณ์ที่ใช้กับเครื่อง โดยมีชนิกข้อมูลเป็น Json {title: string; path: string}
  images_list_gachapong_machine : Array<{ title: string; path: string }> = [
    { title: 'cupboard_gacha', path: '../../../assets/machine_gacha.png' }, // รูป ตู้ gacha
    { title: 'lever', path: '../../../assets/lever.png' }, // รูป คันโยก
    { title: 'handle_arm', path: '../../../assets/handle_arm.png' }, // รูป แขนจับลูกบอล
    { title: 'light_background', path: '../../../assets/light.png' }, // รูป แสงพื้นหลังฃ
    { title: 'background_clouds', path: '../../../assets/background_clouds.png' }, // รูป พื้นหลังก้อนเมฆ
    { title: 'teamLink_logo', path: '../../../assets/teamLink_logo.png' }, // รูป logo TeamLink
    { title: 'teamLink_text', path: '../../../assets/teamLink_text.png' }, // รูป ชื่อ TeamLink
    { title: 'papers', path: '../../../assets/papers.png' }, // รูป เศษกระดาษ
    { title: 'hand', path: '../../../assets/hand.png' }, // รูป มือ
  ];

  // list ของรูปภาพ ลูกบอลหลากสี และชื่อ โดยมีชนิกข้อมูลเป็น Json {title: string; path: string}
  images_list_balls : Array<{ title: string; path: string }> = [
    { title: 'ball_1', path: '../../../assets/ball_1.png' }, // รูป บอลสีฟ้าเข้ม
    { title: 'ball_2', path: '../../../assets/ball_2.png' }, // รูป บอลสีม่วง
    { title: 'ball_3', path: '../../../assets/ball_3.png' }, // รูป บอลสีเขียว
    { title: 'ball_4', path: '../../../assets/ball_4.png' }, // รูป บอลสีฟ้าอ่อน
    { title: 'ball_5', path: '../../../assets/ball_5.png' }, // รูป บอลสีชมพู
    { title: 'ball_6', path: '../../../assets/ball_6.png' }, // รูป บอลสีเหลือง
    { title: 'ball_7', path: '../../../assets/ball_7.png' }, // รูป บอลสีน้ำเงิน
    { title: 'ball_8', path: '../../../assets/ball_8.png' }, // รูป บอลสีแดง
  ];

  // list ของรูปภาพ กล่องของขวัญหลากสี และชื่อ โดยมีชนิกข้อมูลเป็น Json {title: string; path: string}
  images_list_gifts : Array<{ title: string; path: string }> = [
    { title: 'gift_1', path: '../../../assets/box_1.png' }, // รูป กล่องของขวัญสีฟ้าเข้ม
    { title: 'gift_2', path: '../../../assets/box_2.png' }, // รูป กล่องของขวัญสีม่วง
    { title: 'gift_3', path: '../../../assets/box_3.png' }, // รูป กล่องของขวัญสีเขียว
    { title: 'gift_4', path: '../../../assets/box_4.png' }, // รูป กล่องของขวัญสีฟ้าอ่อน
    { title: 'gift_5', path: '../../../assets/box_5.png' }, // รูป กล่องของขวัญสีชมพู
    { title: 'gift_6', path: '../../../assets/box_6.png' }, // รูป กล่องของขวัญสีเหลือง
    { title: 'gift_7', path: '../../../assets/box_7.png' }, // รูป กล่องของขวัญสีน้ำเงิน
    { title: 'gift_8', path: '../../../assets/box_8.png' }, // รูป กล่องของขวัญสีแดง
  ];



  //  path file สำหรับ build
  // images_list_gachapong_machine : Array<{ title: string; path: string }> = [
  //   { title: 'cupboard_gacha', path: './assets/machine_gacha.png' }, // รูป ตู้ gacha
  //   { title: 'lever', path: './assets/lever.png' }, // รูป คันโยก
  //   { title: 'handle_arm', path: './assets/handle_arm.png' }, // รูป แขนจับลูกบอล
  //   { title: 'light_background', path: './assets/light.png' }, // รูป แสงพื้นหลังฃ
  //   { title: 'background_clouds', path: './assets/background_clouds.png' }, // รูป พื้นหลังก้อนเมฆ
  //   { title: 'teamLink_logo', path: './assets/teamLink_logo.png' }, // รูป logo TeamLink
  //   { title: 'teamLink_text', path: './assets/teamLink_text.png' }, // รูป ชื่อ TeamLink
  //   { title: 'papers', path: './assets/papers.png' }, // รูป เศษกระดาษ
  //   { title: 'hand', path: './assets/hand.png' }, // รูป มือ
  // ];

  // // list ของรูปภาพ ลูกบอลหลากสี และชื่อ โดยมีชนิกข้อมูลเป็น Json {title: string; path: string}
  // images_list_balls : Array<{ title: string; path: string }> = [
  //   { title: 'ball_1', path: './assets/ball_1.png' }, // รูป บอลสีฟ้าเข้ม
  //   { title: 'ball_2', path: './assets/ball_2.png' }, // รูป บอลสีม่วง
  //   { title: 'ball_3', path: './assets/ball_3.png' }, // รูป บอลสีเขียว
  //   { title: 'ball_4', path: './assets/ball_4.png' }, // รูป บอลสีฟ้าอ่อน
  //   { title: 'ball_5', path: './assets/ball_5.png' }, // รูป บอลสีชมพู
  //   { title: 'ball_6', path: './assets/ball_6.png' }, // รูป บอลสีเหลือง
  //   { title: 'ball_7', path: './assets/ball_7.png' }, // รูป บอลสีน้ำเงิน
  //   { title: 'ball_8', path: './assets/ball_8.png' }, // รูป บอลสีแดง
  // ];

  // list ของรูปภาพ กล่องของขวัญหลากสี และชื่อ โดยมีชนิกข้อมูลเป็น Json {title: string; path: string}
  // images_list_gifts : Array<{ title: string; path: string }> = [
  //   { title: 'gift_1', path: './assets/box_1.png' }, // รูป กล่องของขวัญสีฟ้าเข้ม
  //   { title: 'gift_2', path: './assets/box_2.png' }, // รูป กล่องของขวัญสีม่วง
  //   { title: 'gift_3', path: './assets/box_3.png' }, // รูป กล่องของขวัญสีเขียว
  //   { title: 'gift_4', path: './assets/box_4.png' }, // รูป กล่องของขวัญสีฟ้าอ่อน
  //   { title: 'gift_5', path: './assets/box_5.png' }, // รูป กล่องของขวัญสีชมพู
  //   { title: 'gift_6', path: './assets/box_6.png' }, // รูป กล่องของขวัญสีเหลือง
  //   { title: 'gift_7', path: './assets/box_7.png' }, // รูป กล่องของขวัญสีน้ำเงิน
  //   { title: 'gift_8', path: './assets/box_8.png' }, // รูป กล่องของขวัญสีแดง
  // ];



  // element(tag div) object ของ id='gachapong_main_frame'
  gachapong_main_frame! : HTMLElement | null;

  // element(tag div) object ของ id='game_frame'
  game_frame! : HTMLElement | null;

  // element(tag div) object ของ id='machine_gacha_layout'
  machine_gacha_layout! : HTMLElement | null;

  // element(tag img) object ของ id='img_machine'
  img_machine! : HTMLElement | null;

  // element(tag div) object ของ id='all_items_in_machine'
  all_items_in_machine! : HTMLElement | null;

  // element(tag div) object ของ id='rope_of_handle_arm'
  rope_of_handle_arm! : HTMLElement | null;

  // element(tag img) object ของ id='img_handle_arm'
  img_handle_arm! : HTMLElement | null;

  // element(tag div) object ของ id='div_of_img_balls_1'
  div_of_img_balls_1! : HTMLElement | null;
  // element(tag div) object ของ id='div_of_img_balls_2'
  div_of_img_balls_2! : HTMLElement | null;
  // element(tag div) object ของ id='div_of_img_balls_3'
  div_of_img_balls_3! : HTMLElement | null;
  // element(tag div) object ของ id='div_of_img_balls_4'
  div_of_img_balls_4! : HTMLElement | null;

  // element(tag img) object ของ id='img_lever'
  img_lever! : HTMLElement | null;

  // element(tag img) object ของ id='img_lever'
  img_hand! : HTMLElement | null;

  // element(tag h2) object ของ id='h2_text_hint'
  h2_text_hint! : HTMLElement | null;

  // list เก็บลูกบอลที่อยู่ในตู้ทั้งหมด
  list_of_balls : HTMLElement[] = [];

  // list สำหรับเก็บค่า rotate ของลูกบอลหลากสีแต่ละลูก ที่ได้จากการสรา้ง
  // rotate_list_of_balls : string[] = [];

  // % ของ top, left (y, x) ของลูกบอลหลากสีของแต่ละลูก
  // top_left_of_balls : { top : string, left : string }[] = [];

  // ตัวแปลสำหรับเก็บค่าของกล่องของขวัญ || มีชนิดข้อมูลเป็น Json {title: string; path: string} || โดยสุ่มจาก images_list_gifts มาเก็บไว้
  prize_gift! : { title: string; path: string };

  // attribule เก็บ object ของลูกบอลที่เป็นรางวัล จาก list_of_balls[] (ลูกบอลที่แสดงอยู่ ข้องในตู้กระจก gachapong)
  // img_prize_ball_in_machine! : HTMLElement | null;

  // element(tag div) object ของ id='div_of_background_blur'
  div_of_background_blur! : HTMLElement | null;

  // element(tag div) object ของ id='img_prize_ball' || เพื่อเก็บลูกบอลที่เป็นรางวัล จาก list_of_balls[] (ลูกบอลที่แสดงอยู่ นอกตู้กระจก gachapong)
  img_prize_ball_out_machine! : HTMLElement | null;

  // element(tag img) object ของ id='img_papers'
  img_papers! : HTMLElement | null;

  // element(tag div) object ของ id='div_of_lightBackground_hintOfGift_prizeGift' || div เก็บ Element แสงหมุน, ข้อความแสดง ,รูปกล่องของขวัญ
  div_of_lightBackground_hintOfGift_prizeGift! : HTMLElement | null;

  // element(tag img) object ของ id='img_light_background'
  img_light_background! : HTMLElement | null;

  // element(tag img) object ของ id='h2_text_hint_of_gift'
  h2_text_hint_of_gift! : HTMLElement | null;

  // element(tag img) object ของ id='img_prize_gift'
  img_prize_gift! : HTMLElement | null;

  // element(tag bytton) object ของ id='button_goHomePage'
  button_goHomePage! : HTMLElement | null;

  // element(tag bytton) object ของ id='button_playAgain'
  button_playAgain! : HTMLElement | null;

  // เริ่มเกมหรือยัง? || เมื่อเอาเมาส์ไปคลิกที่คันโยกที่อยู่บนตู้กาชา
  is_game_started = false;

  // หยิบลูกบอลรางวับขึ้นมาหรือยัง || เมื่อเอาเมาส์ไปคลิกที่ลูกบอลที่ตกลงมาจากตู้กาชา
  is_pickup_prize_ball = false;

  // h2 text hint คำแนะนำแสดงบนหน้าจอ
  text_hint = 'Tap to get a prize!';


  // เก็บฟังก์ชันใน property || สร้าง Function สำหรับเก็บ function animation_lever_rock_left_right()
  private handleLeverClick: (() => void) | undefined;
  // เก็บ function prize_ball_pickup()
  private prizeBallClick: (() => void) | undefined;


  //--------------------------------------------------- function ngOnInit() ทำงานหลังจาก HTML DOM (Document Object Model) ถูกสร้างเสร็จแล้ว
  ngOnInit(): void {
    // กำหนด element(tag ต่างๆ) ให้กับตัวแปล
    this.gachapong_main_frame = document.getElementById('gachapong_main_frame');
    this.game_frame = document.getElementById('game_frame');
    this.machine_gacha_layout = document.getElementById('machine_gacha_layout');
    this.img_machine = document.getElementById('img_machine');
    this.all_items_in_machine = document.getElementById('all_items_in_machine');
    this.rope_of_handle_arm = document.getElementById('rope_of_handle_arm');
    this.img_handle_arm = document.getElementById('img_handle_arm');
    this.div_of_img_balls_1 = document.getElementById('div_of_img_balls_1');
    this.div_of_img_balls_2 = document.getElementById('div_of_img_balls_2');
    this.div_of_img_balls_3 = document.getElementById('div_of_img_balls_3');
    this.div_of_img_balls_4 = document.getElementById('div_of_img_balls_4');
    this.img_lever = document.getElementById('img_lever');
    this.img_hand = document.getElementById('img_hand');
    this.h2_text_hint = document.getElementById('h2_text_hint');
    this.div_of_background_blur = document.getElementById('div_of_background_blur');
    this.img_prize_ball_out_machine = document.getElementById('img_prize_ball_out_machine');
    this.img_papers = document.getElementById('img_papers');
    this.div_of_lightBackground_hintOfGift_prizeGift = document.getElementById('div_of_lightBackground_hintOfGift_prizeGift');
    this.img_light_background = document.getElementById('img_light_background');
    this.h2_text_hint_of_gift = document.getElementById('h2_text_hint_of_gift');
    this.img_prize_gift = document.getElementById('img_prize_gift');
    this.button_goHomePage = document.getElementById('button_goHomePage');
    this.button_playAgain = document.getElementById('button_playAgain');



    // ผูกฟังก์ชันกับ this และเก็บไว้ใน property handleLeverClick
    // เนื่องจาก this context ไม่ถูก bind: เมื่อเพิ่ม event listener โดยใช้ addEventListener ในแบบปกติ ฟังก์ชันที่ถูกเรียกจะไม่รู้จัก this ที่ชี้ไปยัง class GachapongComponent
    this.handleLeverClick = this.animation_lever_rock_left_right.bind(this);///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // เพิ่ม event ให้กับรูปคันโยก เมื่อคลิก จะไปทำานที่ handleLeverClick ที่เก็บ animation_lever_rock_left_right() เอาไว้
    this.img_lever?.addEventListener('click', this.handleLeverClick!);///////////////////////////////////////////////////////////////////////////////////////////////////////////


    // สร้างลูกบอลทีละลูก แล้ว เพิ่มลูกบอลเข้าไปใน div_of_img_balls_1 - 4
    this.createBall(-5, -50, this.div_of_img_balls_1!);
    this.createBall(-5, -50, this.div_of_img_balls_2!);
    this.createBall(-5, -50, this.div_of_img_balls_3!);
    this.createBall(-5, -50, this.div_of_img_balls_4!);


    // console.log(this.top_left_of_balls);


    console.log(this.list_of_balls);

    // สุ่มกล่องของขวัญ ใน images_list_gifts ให้กับตัวแปล
    this.prize_gift = this.images_list_gifts[ Math.floor(Math.random() * (this.images_list_gifts.length - 1)) ]; // ใช่ Math.floor() เพื่อลบจุดทศนิยมออก

    // เรียกใช้งาน animation เลื่อนตู้กาชาขึ้นมา
    this.animation_gachapong_up();

  }


  //--------------------------------------------------- ฟังก์ชันสำหรับสุ่มเรียงลำดับ (Fisher-Yates Shuffle) ใช้เพื่อสุ่มเรียงลำดับลูกบอลหลากสีที่อยู่ใน list || และสุ่มกล่องของขวัญที่อยู่ใน list
  shuffleArray(array: Array<any>): Array<any> {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // สุ่มตำแหน่ง
      [array[i], array[j]] = [array[j], array[i]]; // สลับตำแหน่ง
    }
    return array;
  }


  // กำหนด id ให้กับบอลแต่ละลูก
  ball_id : number = 0;
  //--------------------------------------------------- สร้างลูกบอลทีละลูก แล้ว เพิ่มลูกบอลเข้าไปใน div_of_img_balls_1 - 4
  createBall (x : number , y : number, div_of_img_balls : HTMLElement) : void {
    // เข้าถึงรูปภาพบอลหลากสีทั้งหมดใน list โดยได้จากการสุ่มเรียงสลับบตำแหน่ง
    this.shuffleArray(this.images_list_balls).forEach(item => {
      // let _rotate = `${Math.random() * 360 + 180}deg`; // สุ่มหมุน
      // this.rotate_list_of_balls.push(_rotate); // เก็บค่าสุ่มหมุน ของบอลแต่ละลูกไว้ใน list

      // % ของ top, left (y, x) ของลูกบอลหลากสีของแต่ละลูก
      // let top = `${Math.random() * y}%`; // สุ่ม ตำแหน่ง ขึ้น-ลง
      // let left = `${Math.random() * x}%`; // สุ่ม ตำแหน่ง ซ้าย-ขวา

      let ball = document.createElement('img'); // สร้าง element tag img ขึ้นมา
      ball.setAttribute('src', item.path); // กำหนดรูปภาพให้กับ element นี้
      ball.setAttribute('id', `ball_id_${this.ball_id}`); // กำหนด id='ball_id_(เริ่มที่ 0...)'
      // ball.classList.add('img_ball');
      ball.style.position = 'relative'; // กำหนดให้บอลแต่ละลูกเป็น relative เพื่อที่จะสามารถจัดตำแหน่งด้วย top, left, right, buttom ได้
      ball.style.width = '4.5vh';

      ball.style.marginLeft = '-1.5%';
      ball.style.marginRight = '-1.5%';

      ball.style.rotate = `${Math.random() * 360 + 200}deg`; // สุ่มหมุน

      // ถ้าไม่ใช่บอลลูกที่ 13 จะให้สุ่มตำแหน่งไปเลื่อยๆ || เพราะต้องการกำหนดค่าเริ่มต้นของบอลลูกที่ 13 เอาไว้ให้แขนจับ เลื่อนลงมาจับได้
      if (this.ball_id != 13) {
        ball.style.top = `${Math.random() * y}%`; // สุ่ม ตำแหน่ง ขึ้น-ลง
        ball.style.left = `${Math.random() * x}%`; // สุ่ม ตำแหน่ง ซ้าย-ขวา
      }
      // else {
      //   ball.style.backgroundColor = 'blue';
      // }


      // เพิ่มลูกบอลเข้าไปใน div_of_img_balls_1 - 3
      div_of_img_balls?.appendChild(ball);
      // เก็บลูกบอลไว้ใน list
      this.list_of_balls.push(ball);
      // เก็บตำแหน่ง top left ของบอลแต่ละลูก
      // this.top_left_of_balls.push( {top, left} );

      // console.log('ball rotate = ' ,ball.style.getPropertyValue('rotate'));

      this.ball_id++;
    });
  }


  //--------------------------------------------------- Animation เลื่อนตู้กาชาขึ้นมา
  animation_gachapong_up () : void {
    // // สร้าง animation แบบ from (มาจากไหน)
    // gsap.from(this.machine_gacha_layout, {
    //   y: '100vh', // มาจาก y ที่ 100% ของความสูงหน้าจอ
    //   duration: 0.6, // ใช้เวลา 1 วินาที
    //   ease: 'none', // จังหวะหลุด ไม่มีการ slow

    //   // เมื่อ Animation นี้ทำงานเสร็จแล้ว || ให้ลูกบอลกระเด้งขึ้นทุกลูก
    //   onComplete: () => {
    //     console.log('ตู้กาชาเลื่อขึ้นมาแล้ว');
    //     // เข้าถึง ball แต่ละลูก เพื่อกำหนด Animation ให้กระเด้ง
    //     this.list_of_balls.forEach(ball => {
    //       // สร้าง object ของ Animation
    //       let tl = gsap.timeline();
    //       // สุ่มเวลาให้กับบอลแต่ละลูก
    //       const _duration = 0.05 + Math.random() * 0.1;
    //       // กำหนด Animation ให้ลูกบอลทีละลูก
    //       tl.to(ball, {
    //         y: -(10 + Math.random() * 10), // เด้งขึ้นในแนวแกน -y แบบสุ่มหความสูง
    //         ease: 'power1.out', // ลักษณะแอนิเมชัน
		// 			   duration: _duration,
    //       }).to(ball, {
    //         y: 0, // จากนั้นกลับมาที่เดิม
    //         ease: 'power1.in' // ลักษณะแอนิเมชัน
    //         duration: _duration,
    //       });
    //     });

    //     // หน่วงเวลา 1.5 วิ || ถ้า Animation ลูกบอลเด้งทำงานเสร็จจนหมด จึงทำงานต่อไป
    //     setTimeout(() => {
    //       console.log('บอลเด้งเสร็จหมดแล้ว');
    //       // ถ้ายังไม่เริ่มเกม || ถ้ายังไม่เมาส์ไปคลิกที่รูปคันโยก ภายใน 1.5 วิ || เมื่อเอาเมาส์ไปคลิกที่คันโยกที่อยู่บนตู้กาชา
    //       if (!this.is_game_started) {
    //         console.log('ยังไม่เริ่มเกม');

    //         // // เพิ่ม Event ให้กับรูปคันโยก || เมื่อคลิกที่รูปคันโยกจะไปทำงาน function animation_lever_rock_left_right()
    //         // this.img_lever!.addEventListener('click', this.animation_lever_rock_left_right.bind(this));//////////////////////////////////////////////////////////////////////////////////////////////

    //         // เรียกใช้ function แสดงรูปมือ และแสดงข้อความ พร้อม animetion
    //         this.show_hand_and_text_hint();
    //       }
    //     }, 1000 * 1.5); // หน่วงเวลา 1.5 วิ

    //   },
    // });

    // ให้ลูกบอลกระเด้งขึ้นทุกลูก
    console.log('ตู้กาชาเลื่อนขึ้นมาแล้ว');
    // เข้าถึง ball แต่ละลูก เพื่อกำหนด Animation ให้กระเด้ง
    this.list_of_balls.forEach(ball => {
      // สร้าง object ของ Animation
      let tl = gsap.timeline({ // กำหนดค่าให้กับ object animation
        onComplete: () => {
          // หน่วงเวลา 1.5 วิ || ถ้า Animation ลูกบอลเด้งทำงานเสร็จจนหมด จึงทำงานต่อไป
          setTimeout(() => {
            console.log('บอลเด่งเสร็จหมดแล้ว');
            // ถ้ายังไม่เริ่มเกม || ถ้ายังไม่เมาส์ไปคลิกที่รูปคันโยก ภายใน 1.5 วิ || เมื่อเอาเมาส์ไปคลิกที่คันโยกที่อยู่บนตู้กาชา
            if (!this.is_game_started) {
              console.log('ยังไม่เริ่มเกม');

              // เรียกใช้ function แสดงรูปมือ และแสดงข้อความ พร้อม animetion
              this.show_hand_and_text_hint();
            }
          }, 1000 * 1.5); // หน่วงเวลา 1.5 วิ
        },
      });
      // สุ่มเวลาให้กับบอลแต่ละลูก
      const _duration = 0.05 + Math.random() * 0.1;
      // กำหนด Animation ให้ลูกบอลทีละลูก
      tl.to(ball, {
        y: -(10 + Math.random() * 10), // เด้งขึ้นในแนวแกน -y แบบสุ่มหความสูง
        ease: 'power1.out', // ลักษณะแอนิเมชัน
        duration: _duration,
      }).to(ball, {
        y: 0, // จากนั้นกลับมาที่เดิม
        ease: 'power1.in', // ลักษณะแอนิเมชัน
        duration:  _duration,
      });
    });

  }


  //--------------------------------------------------- Animation คันโยก โยกซ้าย-ขวา || เมื่อผู้ใช้คลิกที่รูปคันโยก
  animation_lever_rock_left_right () : void {
    // เริ่มเกมแล้ว
    this.is_game_started = true;
    // กำหนด animation จาก (ไหน ไป ไหน)
    // สร้าง object การแสดง animation แบบ multiple (timeline)
    let tl = gsap.timeline({ // กำหนดค่าต่างๆให้กับ object animation นี้
      repeat: 1, // -1 ทำซ้ำไม่สิ้นสุด || 0+ จำนวนครั้งในการเล่นซ้ำ Animation ( 0 - N )
      // เมื่อ Animation กำลังเริ่มทำงาน
      onStart: () => {
        console.log('กำลังโยกคันโยก');

        // เอา Even exception ออกจากรูปคันโยก เพื่อไม่ให้กดได้อีก || โดยอิงจาก
        // หากต้องการลบ Event ของ img_lever เพื่อไม่ให้สามารถคลิกได้อีก สามารถใช้คำสั่ง removeEventListener ได้อย่างถูกต้อง โดยต้องแน่ใจว่าการลบ Event นั้นอ้างถึงฟังก์ชันเดียวกับที่เคยใช้ใน addEventListener ซึ่งหมายความว่าต้องเป็น reference ของฟังก์ชันเดียวกันเป๊ะ ๆ
        this.img_lever!.removeEventListener('click', this.handleLeverClick!); ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.img_lever!.style.cursor = 'auto' ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // เรียกใช้ animation ทำให้แขนจับ เลื่อนไปจับลูกบอล
        this.handle_arm_animation();

        // เรียกใช้ animation ทำให้รูปมือ และ ข้อความบนหน้าจอหายไป
        this.close_hand_and_text_hint();

        // เรียกใช้ animation ทำใหห้ตู้กาชาสั่น ไปทางซ้าย-ขวา และลูกบอลหลากสีในตู้สั่ง ขึ้น-ลง
        this.shake_machine_balls();

      },
      // เมื่อ Animation นี้ทำงานเสร็จแล้ว
      onComplete: () => {
        console.log('โยกเสร็จแล้ว');
      },
    });

    // สร้างรูปแบบของ animation คับโยก
    tl.to(this.img_lever, {
      rotation: -30, // หมุนไปทางซ้าย -30 องศา
      duration: 0.5, // ใช้เวลา 1 วินาที
      ease: 'power1.inOut', // ลักษณะแอนิเมชันที่นุ่มนวล
    }).to(this.img_lever, {
      rotation: 30, // หมุนไปทางขวา 30 องศา
      duration: 0.5, // ใช้เวลา 1 วินาที
      ease: 'power1.inOut', // ลักษณะแอนิเมชันที่นุ่มนวล
    }).to(this.img_lever, {
      rotation: -30, // หมุนไปทางซ้าย -30 องศา
      duration: 0.5, // ใช้เวลา 1 วินาที
      ease: 'power1.inOut', // ลักษณะแอนิเมชันที่นุ่มนวล
    }).to(this.img_lever, {
      rotation: 0, // หมุนกลับไปที่ 0 องศา
      duration: 0.5, // ใช้เวลา 1 วินาที
      ease: 'power1.inOut', // ลักษณะแอนิเมชันที่นุ่มนวล
    });

  }



  // -------------------------------------------------- funvtion แสดง animarion ของแขนจับลูกบอล
  handle_arm_animation () : void {
    // สร้าง animation object ของแขนจับลูกบอล เพื่อให้แขนจับเลื่อนไปคีบลูกบอล || กำหนด
    let tl = gsap.timeline();

    tl.to(this.img_handle_arm, { // เลื่อน แขนจับ ไปทางซ้าย
      x: '-6.65vh',
      duration: 0.6,
    })
    .to(this.img_handle_arm, { // เลื่อน แขนจับ ลง
      y: '9vh',
      duration: 0.6,
      onStart: () => { // ทำให้เชือกของ แขนจับ ยาวลงมาด้วย
        gsap.set(this.rope_of_handle_arm, { opacity: 1 }); // แสดงเชื่อก
        gsap.to(this.rope_of_handle_arm, { // เพิ่ม ความยาวของเชือก
          height: '10vh',
          duration: 0.6,
        });
      },
    }).to(this.img_handle_arm, { // เลื่อน แขนจับ ชึ้น
      y: 0,
      duration: 0.6,
      onStart: () => {
        gsap.to(this.rope_of_handle_arm, { // ลด ความยาวของเชือก
          height: '0vh',
          duration: 0.6,
        });

        gsap.to(this.list_of_balls[13], { // เลื่อน ลูกบอล ขึ้น
          y: '-9vh',
          duration: 0.6,
        });
      },
    }).to(this.img_handle_arm, { // เลื่อน แขนจับ ไปทางซ้าย
      x: '-19vh',
      duration: 0.8,
      onStart: () => {
        gsap.set(this.rope_of_handle_arm, { opacity: 0 }); // ไม่ แสดงเชือก
        gsap.to(this.list_of_balls[13], { // เลื่อน ลูกบอล ไปทางซ้าย
          x: '-12.35vh',
          duration: 0.8,
        });
      },
    }).to(this.list_of_balls[13], { // เลื่อน ลูกบอล ลง
      y: '7.5vh',
      rotate: 250,
      zIndex: 3,
      ease: "power2.in",
      duration: 1,
      onComplete: () => {
        gsap.to(this.img_handle_arm, { // เลื่อน แขนจับ ไปทางขาว (กลับมาที่ตำแหน่งเดิม)
          x: 0,
          duration: 1.3,
        });
      },
    });
  }



  // -------------------------------------------------- function ทำใหห้ตู้กาชาสั่น ไปทางซ้าย-ขวา และลูกบอลหลากสีในตู้สั่ง ขึ้น-ลง
  shake_machine_balls () : void {
    // เข้าถึงลูกบอลหลากสีทุกลูก เพื่อทำให้สั่นขึ้น-ลง
    this.list_of_balls.forEach( (ball, index) => {
      // ให้บอลทุกลูกเด้งได้ ยกเว้น บอลลูกที่ 13 || เพราะต้องการให้แขนจับ มาจับลูกบอลลูกนี้
      if ( index != 13 ) {
        let tl = gsap.timeline({ // สร้าง object ของชุด animation ลูกบอลแต่ละลูก || และตั้งค่าให้กับ object นี้
          repeat: 25, // จำนวนครั้งที่ animation object นี้ต้องทำงาน || -1 ทำงานตลอด
          yoyo: true, // กำหนดให้ animation object นี้ ทำงานย้อนกลับด้วยในแต่ละรอบ
        });
        // กำหนดรูปแบบของ object animation ที่ต้องทำงาน ให้กับลูกบอลแต่ละลูก
        tl.to(ball, {
          y: -(Math.random() * 6 + 2), // สุ่มความสูงที่ลูกบอลจะเด้งขึ้นไป
          duration: Math.random() * 0.1 + 0.05, // สุ่มเวลาให้กับบอลแต่ละลูก,
        });
      }

    });


    // สร้าง object ของชุด animation ให้ตู้กาชา เพื่อทำให้ตู้กาชาสั่น || และตั้งค่าให้กับ object นี้
    let tl_mgl = gsap.timeline({
      repeat: 20, // จำนวนครั้งที่ animation object นี้ต้องทำงาน || -1 ทำงานตลอด
      yoyo: true, // กำหนดให้ animation object นี้ ทำงานย้อนกลับด้วยในแต่ละรอบ

      // เมื่อตุ้กาชาสั่งเสร็จแล้ว
      onComplete: () => {
        console.log('ตู้กาชาสั่นเสร็จแล้ว');

        // เรียกใช้ function ที่ทำให้ลูกบอลรางวัลหล่นลงมาที่ช่องรับของ
        this.drop_prize_ball();

      },
    });
    // กำหนดรูปแบบ animation ให้กับตู้กาชา
    tl_mgl.to(this.machine_gacha_layout, {
      x: -2, // ให้ตู้กาชาเลื่อนไปทางแกน x = -2
      duration: 0.1,  // animation เลื่อนไปทางขวานี้จะทำงานเสร็จภายใน 0.1 วิ
    }).to(this.machine_gacha_layout, {
      x: 0, // ให้ตู้กาชาเลื่อนกลับไปทางแกน x = 0
      duration: 0.1,
    });
  }


  // -------------------------------------------------- function ที่ทำให้ลูกบอลรางวัลหล่นลงมาที่ช่องรับของ
  drop_prize_ball () : void {

    // set ค่า rotate ให้กับตัวแปล --rotateFromTypeScript ที่อยู่ใน scss เพื่อให้ tag div="img_prize_ball_out_machine" นำค่า rotate ของ this.list_of_balls[13] ไปใช้ง่าน
    // กำหนดค่าการหมุนของ ลูกบอลรางวัญที่อยู่นอกตู้กระจก ให้ตรงกับลูกบอลรางวัญที่อยู่ในตู้กระจกที่ถูกเลือก
    // this.img_prize_ball_out_machine?.style.setProperty('--rotateFromTypeScript', this.rotate_list_of_balls[13]);
    // console.log('prize ball rotate 13 = ', this.rotate_list_of_balls[13]);

    // เพิ่ม cursor ให้กับ ลูกบอลที่ตกลงมา
    this.img_prize_ball_out_machine!.style.cursor = 'pointer';
    // เพิ่ม Event
    this.prizeBallClick = this.prize_ball_pickup.bind(this);//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.img_prize_ball_out_machine?.addEventListener('click', this.prizeBallClick!);/////////////////////////////////////////////////////////////////////////////////////

    // ทำให้ ลูกบอลรางวัล (ที่อยู่ในตู้กระจกกาชา) หล่นลงมาในช่องเก็บบอลของตู้กาชา
    // gsap.to(this.list_of_balls[10], {
    //   y: '5vh',
    //   duration: 1,
    // });

    // ทำให้ ลูกบอลรางวัล (ที่อยู่นอกตู้กระจก) หล่นลงมาในช่องเก็บบอลของตู้กาชา
    let tl = gsap.timeline({
      // ถ้า ลูกบอลหล่นลงมาแล้ว หลังจาก 1.5 วิ ให้แสดง hint_2 ต่อแล้ว
      onComplete: () => {
        // หน่วงเวลา 1.5 วิ || ถ้า Animation ลูกบอลหล่นลงมาแล้ว จึงทำงานต่อไป
        setTimeout(() => {
          console.log('บอลหล่นแล้ว');
          // ถ้ายังไม่หยิบลูกบอลรางวับขึ้นมา ภายใน 1.5 วิ
          if (!this.is_pickup_prize_ball) {
            this.show_hand_and_text_hint_2(); // แสดง hint ครั้งที่ 2 || รูปมือชี้ บอล ที่หล่นลงมา
          }

        }, 1000 * 1.5); // หน่วงเวลา 1.5 วิ
      },
    });
    tl.to(this.img_prize_ball_out_machine, {
      y: '5vh',
      ease: "bounce.out", // ลักษณะแอนิเมชัน
      duration: 1,
      zIndex: 1,
      opacity: 1,
      onStart: () => {
        gsap.to(this.img_prize_ball_out_machine, { // หลูกบอลหล่นลงมาพร้อมหมุนด้วย
          rotate: Math.random() * 200 + 100, // สุ่มหมุน
          duration: 0.4,
        });
      },
  })

    // กำหนดรูปแบบของการหล่นลงมาของลูกบอลข้างนอก กระจกตู้กาชา
    // บอลรางวัล ตกลงมาแบบสมจริง
		// tl.to(this.img_prize_ball_out_machine, {
		// 	y: '5vh',
		// 	ease: 'power1.in',
		// 	duration: 0.5,
    //   zIndex: 1,
    //   opacity: 1,
		// }).to(this.img_prize_ball_out_machine, {
		// 	y: '4vh',
		// 	ease: 'power1.out',
		// 	duration: 0.2,
    //   zIndex: 1,
    //   opacity: 1,
		// }).to(this.img_prize_ball_out_machine, {
		// 	y: '5vh',
		// 	ease: 'power1.in',
		// 	duration: 0.2,
    //   zIndex: 1,
    //   opacity: 1,
		// }).to(this.img_prize_ball_out_machine, {
		// 	y: '4.5vh',
		// 	ease: 'power1.out',
		// 	duration: 0.1,
    //   zIndex: 1,
    //   opacity: 1,
		// }).to(this.img_prize_ball_out_machine, {
		// 	y: '5vh',
		// 	ease: 'power1.in',
		// 	duration: 0.1,
    //   zIndex: 1,
    //   opacity: 1,
		// });
  }







  //--------------------------------------------------- function animation || เมื่อคลิกที่ลูกบอลรางวัลที่หล่นออกมาจากตู้กระจก
  prize_ball_pickup () : void {

    // เอา Even exception ออกจากรูปลูกบอลที่หล่น หลังจากคลิกที่รูปไปแล้ว เพื่อไม่ให้กดได้อีก || โดยอิงจาก ตัวแปลที่เก็บ function ไว้
    // หากต้องการลบ Event ของ img_prize_ball_out_machine เพื่อไม่ให้สามารถคลิกได้อีก สามารถใช้คำสั่ง removeEventListener ได้อย่างถูกต้อง โดยต้องแน่ใจว่าการลบ Event นั้นอ้างถึงฟังก์ชันเดียวกับที่เคยใช้ใน addEventListener ซึ่งหมายความว่าต้องเป็น reference ของฟังก์ชันเดียวกันเป๊ะ ๆ
    this.img_prize_ball_out_machine!.removeEventListener('click', this.prizeBallClick!); ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.img_prize_ball_out_machine!.style.cursor = 'auto' ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // หลิบลูกบอลรางวับขึ้นมาแล้ว
    this.is_pickup_prize_ball = true;

    console.log('ball pop!!');

    // เรียกใช้ function ไม่แสดงรูปมือ และข้อความบนหน้าจอ
    this.close_hand_and_text_hint();

    // animation เลื่อนลูกบอลรางวัลไปไว้กลางหน้าจอ
    gsap.to(this.img_prize_ball_out_machine, {
      y: '-17vh',
      x: '7.7vh',
      rotate: 0, // หมุนกลับไปที่ 0
      duration: 1,
      scale: 2, // เพิ่มขนาด 2 เท่า
      ease: 'power1.inOut', // เพิ่ม easing ให้นุ่มนวล
      zIndex: 9,

      // เบลอพื้นหลัง || จะทำงานไปพร้อมๆ กันกับลูกบอลมาตรงกลางหน้าจอ
      onStart: () => {
        gsap.to(this.div_of_background_blur, {
          zIndex: 8,
          opacity: 0.5,
          duration: 1,
        });
      },

      // เมื่อลูกบอลเลื่อนมาอยู่กลางหน้าจอแล้ว || ระเบิดออก || ลูกบอล ขยายและหดตัว
      onComplete: () => {
        // สร้าง animation object ที่ทำให้ลูกบอล ขยาย และหดตัว
        let tl = gsap.timeline();
        tl.to(this.img_prize_ball_out_machine, { // บอลเริ่มระเบิดออก
          duration: 0.1,
          scaleX: 2.1,
          ease: 'power1.inOut',
          scaleY: 1.9
        }).to(this.img_prize_ball_out_machine, {
          duration: 0.1,
          ease: 'power1.inOut',
          scaleX: 1.9,
          scaleY: 2.1
        }).to(this.img_prize_ball_out_machine, {
          duration: 0.1,
          ease: 'power1.inOut',
          scaleX: 2.1,
          scaleY: 1.9
        }).to(this.img_prize_ball_out_machine, {
          duration: 0.1,
          ease: 'power1.inOut',
          scaleX: 1.9,
          scaleY: 2.1
        }).to(this.img_prize_ball_out_machine, {
          duration: 0.1,
          ease: 'power1.inOut',
          scaleX: 2.1,
          scaleY: 1.9
        }).to(this.img_prize_ball_out_machine, {
          duration: 0.1,
          ease: 'power1.inOut',
          scaleX: 1.9,
          scaleY: 2.1
        }).to(this.img_prize_ball_out_machine, {
          duration: 0.5,
          ease: 'power1.out',
          scaleX: 2.6,
          scaleY: 1.6
        }).to(this.img_prize_ball_out_machine, {
          duration: 0.1,
          ease: 'power1.out',
          scaleX: 1.6,
          scaleY: 2.4,
          onComplete: () => { // แสดงเอฟเฟกต์การระเบิด (confetti) พร้อมแสดงของรางวัล
            this.ball_pop();
          },
        }).to(this.img_prize_ball_out_machine, {
          duration: 0.1,
          ease: 'power1.out',
          scaleX: 2.1,
          scaleY: 1.9,
        }).to(this.img_prize_ball_out_machine, {
          duration: 0.1,
          ease: 'power1.out',
          scaleX: 2,
          scaleY: 2
        });
      },
    });
  }


  // animation แสดงกระดาษโปรยปราย || เมื่อลูกบอลระเบิดเสร็จแล้ว
  ball_pop () : void {
    console.log("บอลระเบิดแล้ว");

    // ทำให้ลูกบอลหายไป
    gsap.to(this.img_prize_ball_out_machine, {
      opacity: 0,
      duration: 0.2,

      // เมื่อลูกบอลหายไปแล้ว || ให้แสดง กล่องรางวัญ, ข้อความ, แสงหมุน
      onComplete: () => {
        this.show_lightBackground_textHint_giftBox();
      },
    });

    // ทำให้เศษกระดาษขยาย และหายไป
    let tl = gsap.timeline({
    });
    tl.to(this.img_papers, {
      zIndex: 15, //15
      scale: 40,
      duration: 1,
      ease: "power4.out",

      onStart: () => {
        gsap.to(this.img_papers, {
          y: '25vh',
          opacity: 0,
          duration: 3,
          ease: "power2.out",
        });
      },
    }).to(this.img_papers, {
      zIndex: -1,
      opacity: 0,
      duration: 0.1,
      onComplete: () => {
        this.machine_gacha_layout?.removeChild(this.img_papers!);
      },
    });
  }


  // function แสดง กล่องรางวัญ, ข้อความ, แสงหมุน
  show_lightBackground_textHint_giftBox () : void {

    // กำหนดข้อความที่จะแสดง โดยสามารถใส่ tag htmal (<br>) ได้
    this.h2_text_hint_of_gift!.innerHTML = `You got a<br>${this.prize_gift.title}`;

    // แสดง div ของแสงหมุน และ กล่องของขวัญ
    gsap.to(this.div_of_lightBackground_hintOfGift_prizeGift, {
      zIndex: 11,
      duration: 0.1,

      // แสดง แสงหมุน และ กล่องของขวัญ
      onStart: () => {
        // แสงหมุน
        gsap.to(this.img_light_background, {
          opacity: 1,
          duration: 0.3,
        });
        // กล่องของขวัญ
        gsap.to(this.img_prize_gift, {
          opacity: 1,
          duration: 0.3,
          ease: 'back.out',

          // แสดงข้อความ
          onComplete: () => {
            setTimeout(() => {
              // แสดงข้อความ
              gsap.to(this.h2_text_hint_of_gift, {
                opacity: 1,
                y: '-5vh',
                duration: 1,
              });

              // แสดงปุ่ม เล่นอีกครั้ง โดยเลื่อนปุ่มกลับบ้านไปทางซ้าย และเลื่อนปุ่มเล่นอีกครั้งไปทางขวา
              gsap.to(this.button_goHomePage, { // เลื่อนปุ่มกลับบ้านไปทางซ้าย
                left: '0vh',
                duration: 1,

                onStart: () => { // เลื่อนปุ่มเล่นอีกครั้งไปทางขวา
                  gsap.to(this.button_playAgain, {
                    zIndex: 17,
                    opacity: 1,
                    right: '0vh',
                    duration: 1,
                  });
                },
              });
            }, 1000 * 2);
          },
        });
      },


    });
  }








  //--------------------------------------------------- function แสดงรูปมือและ animation
  show_hand_and_text_hint () : void {
    // animation ของ รูปมือ
    // gsap.set(this.img_hand, { opacity: 0 }); // กำหนดค่าเริ่มต้นให้กับ element img_hand || ไม่ให้แสดง
    // animation เริ่มแสดงรูปมือ
    gsap.to(this.img_hand, {
      opacity: 1,
      duration: 1,
    });

    // animation ของ แสดงข้อความ
    // gsap.set(this.h2_text_hint, { opacity: 0 }); // กำหนดค่าเริ่มต้นให้กับ element h2_text_hint || ไม่ให้แสดง
    // animation เลื่อนข้อความขึ้นมา
    gsap.fromTo(this.h2_text_hint, {
      bottom: '-30vh', // จากตำแหน่งเริ่มต้น
      opacity: 0,
      duration: 1,
    }, {
      bottom: '-22vh', // สู่ตำแหน่งสุดท้าย
      opacity: 1,
      duration: 1,
    });
  }


  //--------------------------------------------------- function animation ทำให้รูปมือ และ ข้อความบนหน้าจอหายไป
  close_hand_and_text_hint () : void {
    // animation ของ รูปมือ
    // gsap.set(this.img_hand, { opacity: 1 }); // กำหนดค่าเริ่มต้นให้กับ element img_hand || ให้แสดง
    // animation ไม่แสดงรูปมือ
    gsap.to(this.img_hand, {
      opacity: 0,
      duration: 1,
    });

    // gsap.set(this.h2_text_hint, { opacity: 1 }); // กำหนดค่าเริ่มต้นให้กับ element h2_text_hint || ให้แสดง
    // animation เลื่อนข้อความลงไป
    gsap.to(this.h2_text_hint, {
      bottom: '-30vh', // สู่ตำแหน่งสุดท้าย
      opacity: 0,
      duration: 1,
    });
  }


  //--------------------------------------------------- function แสดงรูปมือและ animation ครั้งที่ 2
  show_hand_and_text_hint_2 () : void {

    // animation ของ รูปมือ
    // gsap.set(this.img_hand, { opacity: 0 }); // กำหนดค่าเริ่มต้นให้กับ element img_hand || ไม่ให้แสดง
    // animation เริ่มแสดงรูปมือ

    // h2 text hint คำแนะนำแสดงบนหน้าจอ
    this.text_hint = 'Tap to claim it!';

    this.img_hand?.classList.remove('img_hand_1'); // เอา style class img_hand_1 ออกจาก element img_hand
    this.img_hand?.classList.add('img_hand_2'); // เอา style class img_hand_2 เข้าไปแทานที่ ใน element img_hand

    gsap.to(this.img_hand, {
      opacity: 1,
      duration: 1,
    });

    // animation ของ แสดงข้อความ
    // gsap.set(this.h2_text_hint, { opacity: 0 }); // กำหนดค่าเริ่มต้นให้กับ element h2_text_hint || ไม่ให้แสดง
    // animation เลื่อนข้อความขึ้นมา
    gsap.to(this.h2_text_hint, {
      bottom: '-22vh', // จากตำแหน่งเริ่มต้น
      opacity: 1,
      duration: 1,
    });
  }











  //--------------------------------------------------- function เปลี่ยนไปหน้า home
  go_to_home_page () : void {
    this.router.navigateByUrl('/');
  }

  //--------------------------------------------------- function เริ่มหน้าใหม่อีกครั้ง
  play_again () : void {
    // window.location.reload(); // reload หน้าปัจจุบันใหม่
    window.location.replace('/gachapong'); // ลบข้อมูลใน state ของหน้าปัจจุบันออก แล้วเปลี่ยนหน้าไปยัง utl ที่กำหนด
    // window.location.replace('/gachapong-research/gachapong'); // สำหรับ build test
  }

}









