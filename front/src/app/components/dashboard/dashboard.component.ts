import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/_services/conge/conge.service';
import { TacheService } from 'src/app/_services/tache/tache.service';
import { userService } from 'src/app/_services/user/user.service';
declare var google:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  taches = 0
  users = 0
  conges = 0
  constructor(
    private userService:userService,
    private congeService:CongeService,
    private tacheService:TacheService,
  ) { }

  ngOnInit(): void {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
    this.getallconge()
    this.getalltache()
    this.getalluser()
  }
  drawChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Users', 3],
      ['Conges', 1],
      ['Tâches', 1], 
    ]);
    var chart = new google.visualization.PieChart(document.getElementById('divPieChart'));
    chart.draw(data, null);
  }
  

  getalltache(){
    this.tacheService.gettaches().subscribe((res)=>{ 
      this.taches = res.length;
      console.log(this.taches)
    })
  }
  getalluser(){
    this.userService.getusers().subscribe((res)=>{ 
      this.users = res.length;
      console.log(this.users)
    })
  }
  getallconge(){
    this.congeService.getConges().subscribe((res)=>{ 
      this.conges = res.length;
      console.log(this.taches)
    })
  }

}
