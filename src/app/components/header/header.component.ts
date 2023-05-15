import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  email: string = "";
  password: string = "";
  isUserLoggedIn: boolean = false;

  constructor(private userService: UserService){}

  loginUser(): void{
    this.userService.loginUser(this.email, this.password).subscribe((isLoggedIn:boolean) => {
      this.isUserLoggedIn = isLoggedIn;
    })
  }

  logoutUser(): void {
    this.isUserLoggedIn = false;
    this.userService.logoutUser();
  }

  emailChanged($event:any) {
    this.email = $event.currentTarget.value;
  }

  passwordChanged($event:any) {
    this.password = $event.currentTarget.value;
  }
}
