import { Component } from '@angular/core';
import { FakeserviceService } from './fakeservice.service';
import { find,first,of, timer,interval,range, Observable,map,take,observable,from}from 'rxjs';
import {ajax}from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myapp';

  constructor(private FakeService:FakeserviceService){

    this.FakeService.getPostsGood().subscribe(x=>{

      console.log(x);
    })
  }


// //Filter operator
// //First operator

// var fromOperator = from([10,20,30,40,50,60,70]);

// var fromOperatorByproduct=from([
//   {id:1,name:'kalem1',price:100},
//   {id:2,name:'kalem2 ',price:100},
//   {id:3,name:'kalem3',price:100}
// ])
// fromOperatorByproduct.pipe(take(2)).subscribe(x =>{
//   console.log(x)
// })
// //Map
// fromOperator.pipe(map(x=>x*2)).subscribe(x=>{
//   console.log(x);
// })


// fromOperator.pipe(first()).subscribe(x=> {
//   console.log(x);
//})
// //Fİnd
// fromOperator.pipe(find(x=> x=>40))


    //CREATE Observable

//     let  myObservable = Observable.create((observer:any) => {
//       observer.next('Hello Guys!');
//       observer.next('Hello World!');
//       observer.next('Hello AI!');
//     })

// myObservable.subscribe((x:any)=>{
//   console.log(x);
// })

// myObservable.subscribe({
//   next:(value: any) => console.log(value),
//   error:(err: Error) => { console.log(err)},
//   complete:() => { console.log("data alma işlemi tamamlandı.")}
// })




    //AJAX
// ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1").subscribe(x=>{
//   console.log(x);
// })


// //range
// range(1.,20).subscribe(x=>{
//   console.log(x);
// })


  ///timerr
  // timer(5000).subscribe(x=>{
  //  console.log(x);
  //  alert ("kampanya var");
  // })


// constructor(){
//   let ofOperator= of(1,2,3,4,5);
// ofOperator.subscribe(x=>{
//   console.log(x)
// })


// interval(10000).subscribe(x=>;{
// console.log(x);
// })
}
