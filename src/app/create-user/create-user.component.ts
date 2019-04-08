import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  regististrationData = {}

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  registerUser(){
    //console.log(this.regististrationData)
    this._auth.registerUser(this.regististrationData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
