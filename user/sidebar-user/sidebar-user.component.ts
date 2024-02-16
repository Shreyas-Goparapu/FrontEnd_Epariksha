import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { SidenavtoggleService } from 'src/app/services/sidenavtoggle.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent {
  all_cat=0;
  categories:any;
  constructor(private _category:CategoryService, public _sidenavService:SidenavtoggleService){}
  ngOnInit(){
    this._category.categories().subscribe((data:any)=>{
      this.categories=data.data
    },
    (error)=>{
      console.log(error);
    })
  }
  showFiller = false;
  
}
