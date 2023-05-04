import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../types";
import { DatePipe } from '@angular/common';
@Component({
  selector: "admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
  // template:` <p>{{ formattedDate }}</p>`
})
export class AdminDashboardComponent implements OnInit {
  // currentDate: Date = new Date();
  // formattedDate: string;
  constructor(private client: HttpClient, private  datePipe: DatePipe) {
    // this.formattedDate = this.datePipe.transform(this.currentDate, 'EEEE')?.toLocaleLowerCase() ?? '';
    // this.formattedDate = this.datePipe.transform(this.currentDate, 'EEEE') ?? '';


  }

  // const date = new Date();
  // const formattedDate = date.toISOString().substring(0, 10);
  // console.log(formattedDate);


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
    this.client.get<User[]>("http://localhost:8000/api/user/all").subscribe(value => this.users = value);
    // console.log(this.client.get<User[]>("http://localhost:8000/api/user/all").subscribe(value => this.users = value));
  }

  userTrackBy(index: number, user: User): number {
    return user["id"];
  }

  deleteUser(id: number) {
    this.client.delete(`http://localhost:8000/api/user/all/${id}`).subscribe(() => this.getAllUsers());
  }

}
