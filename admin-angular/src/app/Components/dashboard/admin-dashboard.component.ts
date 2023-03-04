import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:"admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"]
})
export class AdminDashboardComponent {
  users: object[] = [];
  constructor(client: HttpClient) {
    client.get<object[]>("http://localhost:3001/users").subscribe(value => this.users = value)
  }
}
