import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/_services/conge/conge.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css']
})
export class AddCongeComponent implements OnInit {
  user = this.token.getUser()
  id = this.user.id
  form: any = {
    dateDebut: null,
    dateFin: null,
    id_user: this.id
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private congeService: CongeService,
    private token: TokenStorageService,
    
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    console.log(this.form)
    this.congeService.createConge(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
