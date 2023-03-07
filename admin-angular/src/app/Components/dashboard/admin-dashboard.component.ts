import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../types";

@Component({
  selector: "admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"]
})
export class AdminDashboardComponent implements OnInit {
  constructor(private client: HttpClient) {
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
    this.client.get<User[]>("http://localhost:3001/users").subscribe(value => this.users = value);
  }

  userTrackBy(index: number, user: User): number {
    return user["id"];
  }

  deleteUser(id: number) {
    this.client.delete(`http://localhost:3001/users/${id}`).subscribe(() => this.getAllUsers());
  }

}
