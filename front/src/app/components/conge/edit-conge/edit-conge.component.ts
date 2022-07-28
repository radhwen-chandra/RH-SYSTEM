import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CongeService } from 'src/app/_services/conge/conge.service';

@Component({
  selector: 'app-edit-conge',
  templateUrl: './edit-conge.component.html',
  styleUrls: ['./edit-conge.component.css']
})
export class EditCongeComponent implements OnInit {
  id : any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  form: any = {
    dateDebut: null,
    dateFin: null,
  };
  constructor(private congeService: CongeService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];
    console.log(this.id)
      this.congeService.getCongeById(this.id).subscribe((res)=>{
      this.form.dateDebut = res.dateDebut
      this.form.dateFin = res.dateFin
  })
  }

  onSubmit(): void {
    console.log(this.form)
    // const { username, email, password } = this.form;

    this.congeService.updateConge(this.form,this.id).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(["/conge-list"])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }



  
}
