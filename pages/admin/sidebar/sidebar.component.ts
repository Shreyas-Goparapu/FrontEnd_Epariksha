import { Component } from '@angular/core';
import { SidenavtoggleService } from 'src/app/services/sidenavtoggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public _sidenavService: SidenavtoggleService){}
}
