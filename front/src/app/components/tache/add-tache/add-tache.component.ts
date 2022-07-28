import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TacheService } from 'src/app/_services/tache/tache.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {

  user = this.token.getUser()
  role = this.user.roles[0]
  id = this.user.id
  form: any = {
    nomprojet: null,
    tache_estimer: null,
    id_user: this.id
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private tacheService: TacheService,
    private token: TokenStorageService,
    
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    console.log(this.form)
    this.tacheService.createtache(this.form).subscribe(
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
