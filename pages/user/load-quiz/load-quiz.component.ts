import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizzesService } from 'src/app/services/quizzes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent {
  catId=0;
  category:any;
  quizzes=[{
    "qid": '',
    "title": "",
    "description": "",
    "maxMarks": "",
    "numberOfQuestions": "",
    "active": true,
    "category": {
      "cid": '',
      "title": "",
      "description": ""
    }
  }];
  params:any;
  catTitle='';
  constructor(private _route:ActivatedRoute ,private _quiz:QuizzesService ,private _category:CategoryService){}
  
  ngOnInit(): void{
    this._route.params.subscribe((params)=>{
      this.params=params
      this.catId=this.params.qid;
      if(this.catId==0){
        this._quiz.getQuizzes().subscribe((data:any)=>{
          this.quizzes=data.data;
          this.catTitle="All Categories."
        },
        (error)=>{
          console.log(error);
          Swal.fire('Error!', 'Error in loading data', 'error')
        })
      }
      else{
        this._category.getCategorybyId(this.catId).subscribe((data:any)=>{
          this.category=data.data;
          this.catTitle=this.category.title+" Category"
        },
        (error)=>{
          console.log(error);
          Swal.fire('Error!', 'Error in loading data', 'error')
        })
        this._quiz.getActiveQuizzesbyCategory(this.catId).subscribe((data:any)=>{
          this.quizzes=data.data;
          console.log(this.quizzes);
        },
        (error)=>{
          console.log(error);
          Swal.fire('Error!', 'Error in loading data', 'error')
        })
      }
    })
  
  }
}

