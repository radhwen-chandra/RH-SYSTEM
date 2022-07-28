import { Component, OnInit } from '@angular/core';
import { conge } from 'src/app/_models/conges';
import { CongeService } from 'src/app/_services/conge/conge.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-conge-list',
  templateUrl: './conge-list.component.html',
  styleUrls: ['./conge-list.component.css']
})
export class CongeListComponent implements OnInit {
  role = this.token.getUser().roles[0];
  id = this.token.getUser().id_user;
  conges!:any[]
  constructor(
    private serviceConge : CongeService,
    private token : TokenStorageService,

    ) { }

  ngOnInit(): void {
    this.getallConge()
    
  }

  getallConge(){
    this.serviceConge.getConges().subscribe((res)=>{ 
      this.conges = res;
      console.log(this.conges)
    })
  }

  delete(id:any){
    this.serviceConge.deleteConge(id).subscribe((res)=>this.getallConge())
  }
  confirm(id:any){
    this.serviceConge.updateConge({etat:true},id).subscribe((res)=>{
      this.getallConge()
    })
  }
 
}
