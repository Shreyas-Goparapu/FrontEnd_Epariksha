import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ShowquizofcategoryComponent } from '../showquizofcategory/showquizofcategory.component';
import { QuizzesService } from 'src/app/services/quizzes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  categories : any;
  quizzes : any;
  constructor(private category: CategoryService, private dialog:MatDialog, private _quiz:QuizzesService){}

  ngOnInit(): void {
    this.category.categories().subscribe((data:any)=>{
      this.categories=data.data;
      console.log(this.categories);
      
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!', 'Error in loading data.', 'error')
    });

  }

  openDialog(cid:any){
    this.dialog.open(ShowquizofcategoryComponent);

  }

  deleteCat(cid:any){
    Swal.fire({
      icon:'warning',
      title:'Are you sure, you want delete this category?',
      confirmButtonText:'Delete',
      showCancelButton:true 
    }).then((result)=>{
      if(result.isConfirmed){
        this.category.deleteCat(cid).subscribe((data:any)=>{
          this.categories = this.categories.filter((cat:any)=>cat.cid!=cid)
          Swal.fire('Success!', 'Category successfully deleted.', 'success')
        },
        (error)=>{
          console.log(error);
          Swal.fire('Error!', 'Error in deleting category.', 'error')
        })
      }
    })
  }

  getQuizbyCategory(cid:any){
    this._quiz.getQuizbyCategory(cid).subscribe((data:any)=>{
      this.quizzes=data.data;
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!', 'Error in loading data.', 'error')
    })
  }
  panelOpenState = false;
}
