import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import * as d3 from 'd3';
import { User } from '../types';
import { count } from './../../../../node_modules/@types/d3-array/index.d';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  formattedDate: string;
  currentDate: Date = new Date();

  constructor(private client: HttpClient , private  datePipe: DatePipe){
    this.formattedDate = this.datePipe.transform(this.currentDate, 'EEEE')?.toLocaleLowerCase() ?? '';
  }
  
  ngOnInit(): void {
    this.getAllUsers();
    this.getAlltweeta();

    this.createSvg(); 
  }


  private _users: User[] = [];
  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  



  getAllUsers() {

    this.client.get<User>("http://localhost:8000/api/user/statstic/2023-04-5/2023-04-5").subscribe(value => {     // console.log(value);
      this.data[0]["Likes"]=value.count.toString()+15;
      // console.log(value.count+0);
      
      this.drawBars(this.data);
    });
    

  }

  getAlltweeta() {
    this.client.get<User>("http://localhost:8000/api/tweet/statstic/2023-05-5/2023-04-5").subscribe(value => {
      this.data[1]["Likes"]=value.count.toString()+8;
      // console.log(value.count+0);
      
      this.drawBars(this.data);
    });
  }

  userTrackBy(index: number, user: User): number {
    return user["id"];
  }

    



    private data = [
      {"User": "all user", "Posts": "450", "Likes": "70"},
      {"User": "all tweeta", "Posts": "680", "Likes": "40"},
      // {"User": "kids user", "Posts": "460", "Likes": "30"},
    ];

    private svg: any;
    private margin = 90;
    private width = 550 - (this.margin * 2);
    private height = 500 - (this.margin * 2);
    private createSvg(): void {
      this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    }

    private drawBars(data: any[]): void {
      // Create the X-axis band scale
      const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.User))
      .padding(0.2);

      // Draw the X-axis on the DOM
      this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

      // Create the Y-axis band scale
      const y = d3.scaleLinear()
      .domain([0, 100])
      .range([this.height, 0]);

      // Draw the Y-axis on the DOM
      this.svg.append("g")
      .call(d3.axisLeft(y));

      // Create and fill the bars
      this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.User))
      .attr("y", (d: any) => y(d.Likes))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.Likes))
      .attr("fill", "#DD4141");
      // .attr("fill", "#419FDD");

    }



  






}
