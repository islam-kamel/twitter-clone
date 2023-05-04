import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { User } from '../types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private isuserLogged:BehaviorSubject<boolean>;
  userFormGroup:FormGroup;
  // constructor(private router: Router) {}
  constructor(private client: HttpClient,private router: Router){
    this.userFormGroup=new FormGroup({
      userName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z0-9]+$')]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$')]),
    })
    this.isuserLogged=new BehaviorSubject<boolean>(this.userloggedstate)
  }
  get userloggedstate():boolean{
    return (localStorage.getItem('token'))?true:false;
  }

  get userName(){
    return this.userFormGroup.get('userName')
  }
  get email(){
    return this.userFormGroup.get('email')
  }
  get password(){
    return this.userFormGroup.get('password')
  }
  private _users: User[] = [];

  get users(): User[] {
    return this._users;
  }
  set users(value: User[]) {
    this._users = value;
  }
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.client.get<User[]>("http://localhost:3000/logenDashbord").subscribe(value => this.users = value);
  }

  onSubmit()
  {
    for (let index = 0; index < this._users.length; index++) {
      if (this._users[index].email==this.userFormGroup.value.email && this._users[index].username==this.userFormGroup.value.userName && this._users[index].password==this.userFormGroup.value.password)
      {        
        this.isuserLogged.next(true);
        this.router.navigate(['/dashboard']);
        localStorage.setItem("token",this._users[index].username);
        // let usertoken=this._users[index].username;
        // this.router.navigate(['dashboard', { id: 123 }])
        // console.log(this._users[index].email ,index);
        break;        
      }
    }
  }

}
