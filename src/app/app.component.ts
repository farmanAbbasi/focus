import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';//3

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id:number;
  
 titleData = [];
  found:boolean;
  title = 'app';


  constructor (private httpClient:HttpClient)//4 pura constructor
  {}

  onNameKeyUp(event : any)//6 pura event  yaha 1 kaam complete hua
  {
    this.id=event.target.value;
    this.found=false;
  }
  i: number ;
getProfile()//8
  {
   console.log(this.id);
   this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/?userId=${this.id}`)//note `` not ''
   .subscribe(
     (data:any[])=>{
      console.log(data);
      if(data.length)
      {
       
        for(this.i=0;this.i<data.length;this.i++)
      {
        this.titleData[this.i]=data[this.i].title;
        this.found=true;
        
      }
        
      }
     }
   )
  }
  //..........................................................post
  postProfile()//8
  {
   console.log(this.id);
   this.httpClient.post(`https://jsonplaceholder.typicode.com/posts/`,
  [
    {name:'hello farman'},{name:'pooja'}]
  )
   .subscribe(
     (data:any)=>{
      console.log(data);  
      
     }
   )
  }

}
