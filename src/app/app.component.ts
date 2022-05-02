import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openedSidebar=true;
  notif=false ;
  isCollapsed = false;
  productList= false;
  openNotif(){
    if(this.notif== false){
      this.notif = true;
    }
    
  }
  closeNotif(){
    this.notif = false;
  }
  mail=false ;
  openMail(){
    if(this.mail== false){
      this.mail = true;
    }
    
  }
  closeMail(){
    this.mail = false;
  }
  openList(){
    if(this.productList== false){
      this.productList = true;
    }
    
  }
  closeList(){
    this.productList = false;
  }
}
