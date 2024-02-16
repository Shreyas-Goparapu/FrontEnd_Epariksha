import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  category = {
    title: '',
    description: ''
  };

  constructor(private add_cat: CategoryService, private snack: MatSnackBar, private _router: Router) { }

  formSubmit(){
    if (this.category.title.trim() == '' || this.category.title == null) {
      this.snack.open("Title is required !!", '', {
        duration: 2000
      });
      return;
    }

    this.add_cat.addCategory(this.category).subscribe((data: any)=>{
      this.category.title='';
      this.category.description='';
      Swal.fire('Success!', 'Category added successfully', 'success').then((e)=>{
        this._router.navigate(['/admin/categories'])
      });
      
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!', 'Category was not added', 'error')
    });
  }

  ngOnInit(): void {
    
  }
}
