import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user = this.tokenStorageService.getUser()
  role = this.user.roles[0]
  constructor(private tokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
