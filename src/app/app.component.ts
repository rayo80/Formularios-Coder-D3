import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FormsVilla';
  data:any=[];


  onUserAdd(e:any){
    /*se rescribe la data*/
    console.log(e)
    let index=1;
    if(this.data.length>0){
      index=this.data.length+1;
      e['position']=index;
      this.data.push(e);
    }else{
      console.log(this.data)
      e['position']=index;
      this.data.push(e)
    }
    console.log(this.data)
  }
}
