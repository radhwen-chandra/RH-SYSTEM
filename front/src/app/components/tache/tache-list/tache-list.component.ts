import { Component, OnInit } from '@angular/core';
import { TacheService } from 'src/app/_services/tache/tache.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.css']
})
export class TacheListComponent implements OnInit {

  user = this.token.getUser()
  role = this.user.roles[0]
  taches!:any[]
  constructor(private servicetache : TacheService,
    private token : TokenStorageService
    ) { }

  ngOnInit(): void {
    this.getalltache()
  }

  getalltache(){
    this.servicetache.gettaches().subscribe((res)=>{ 
      this.taches = res;
      console.log(this.taches)
    })
  }

  delete(id:any){
    this.servicetache.deletetache(id).subscribe((res)=>this.getalltache())
  }
  confirm(id:any){
    var d = new Date()
    var fulldate = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
    this.servicetache.updatetache({etat:true,tache_confirmer:fulldate},id).subscribe((res)=>{
      this.getalltache()
    })
    
  }

}
