import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit ,OnChanges  {
   isuserLogout:boolean=false;
  // private isuserLogout:BehaviorSubject<boolean>;

  currentDate: Date = new Date();
  formattedDate: string;
  formattedDates:any;

  constructor(private router: Router,private loginComponent:LoginComponent, private  datePipe: DatePipe){ 
    // this.isuserLogout=new BehaviorSubject<boolean>(this.userloged)
    this.formattedDate = this.datePipe.transform(this.currentDate, 'EEEE')?.toLocaleLowerCase() ?? '';

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isuserLogout=this.loginComponent.userloggedstate;

  }
  ngOnInit(){
    this.isuserLogout=this.loginComponent.userloggedstate;
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    this.formattedDates = new Intl.DateTimeFormat('en-US').format(date);
    // console.log(formattedDates);
  }

  get userloged(){
    return(localStorage.getItem('token'))?true:false;
  }

  logoutuser(): void{
    localStorage.removeItem("token");
    this.router.navigate(['login']);
    // this.isuserLogout.next(true)
  }

}
