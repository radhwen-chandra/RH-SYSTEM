import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class userListComponent implements OnInit {

  users!:any[]
  constructor(private serviceuser : userService) { }

  ngOnInit(): void {
    this.getalluser()
  }

  getalluser(){
    this.serviceuser.getusers().subscribe((res)=>{ 
      this.users = res;
      console.log(this.users)
    })
  }

  delete(id:any){
    this.serviceuser.deleteuser(id).subscribe((res)=>this.getalluser())
  }
  confirm(id:any){
    var d = new Date()
    var fulldate = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
    this.serviceuser.updateuser({etat:true,user_confirmer:fulldate},id).subscribe((res)=>{
      this.getalluser()
    })
    
  }

}
