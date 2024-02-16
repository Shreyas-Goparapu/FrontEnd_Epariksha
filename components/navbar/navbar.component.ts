import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarUserComponent } from 'src/app/pages/user/sidebar-user/sidebar-user.component';
import { SidenavtoggleService } from 'src/app/services/sidenavtoggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public login:LoginService, private _router:Router, private _sidenavService: SidenavtoggleService){}
  iconDescription: string = '';
  showDescriptionFlag: boolean = false;

  logout(){
    this.login.logout();
    this._router.navigate(['/'])
  }

  checkRoleHome(){
    let role = this.login.getUserRole();
    if(this.login.isLoggedIn()&&role=="STUDENT"){
      this._router.navigate(['/user-dashboard/'])
    }

    else if(this.login.isLoggedIn()&&role=="ADMIN"){
      this._router.navigate(['/admin/'])
    }

    else{
      this._router.navigate(['/'])
    }
  }

  showProfileRole(){
    let role = this.login.getUserRole();
    if(this.login.isLoggedIn()&&role=="STUDENT"){
      this._router.navigate(['/user-dashboard/profile'])
    }

    else if(this.login.isLoggedIn()&&role=="ADMIN"){
      this._router.navigate(['/admin/profile'])
    }

    else{
      this._router.navigate(['/'])
    }
  }

  sidenavToggle(){
    this._sidenavService.toggle()    
  }

  showDescription(description: string) {
    this.iconDescription = description;
    this.showDescriptionFlag = true;
  }

  hideDescription() {
    this.showDescriptionFlag = false;
  }

}
