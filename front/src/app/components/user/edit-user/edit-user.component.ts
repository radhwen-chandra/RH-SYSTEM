import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  id : any
  constructor(private userService: userService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];
    console.log(this.id)
      this.userService.getuserById(this.id).subscribe((res)=>{
      this.form.username = res.username
      this.form.email = res.email
  })
  }

  onSubmit(): void {
    console.log(this.form)
    // const { username, email, password } = this.form;

    this.userService.updateuser(this.form,this.id).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(["/user-list"])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


}
