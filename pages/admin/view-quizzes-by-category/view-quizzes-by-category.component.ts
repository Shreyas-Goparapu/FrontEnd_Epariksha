import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizzesService } from 'src/app/services/quizzes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes-by-category',
  templateUrl: './view-quizzes-by-category.component.html',
  styleUrls: ['./view-quizzes-by-category.component.css']
})
export class ViewQuizzesByCategoryComponent {
  catId = 0;
  category: any;
  quizzes = [{
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
  params: any;
  catTitle = '';
  constructor(private _route: ActivatedRoute, private _quiz: QuizzesService, private _category: CategoryService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.params = params
      this.catId = this.params.cId;
      this._category.getCategorybyId(this.catId).subscribe((data: any) => {
        this.category = data.data;
        this.catTitle = this.category.title + " Category"
      },
        (error) => {
          console.log(error);
          Swal.fire('Error!', 'Error in loading data', 'error')
        })
      this._quiz.getQuizbyCategory(this.catId).subscribe((data: any) => {
        this.quizzes = data.data;
        console.log(this.quizzes);
      },
        (error) => {
          console.log(error);
          Swal.fire('Error!', 'Error in loading data', 'error')
        })
    }
    )
  }
  deleteQuiz(qId:any){
    Swal.fire({
      icon:'warning',
      title:'Are you sure, you want delete the quiz?',
      confirmButtonText:'Delete',
      showCancelButton:true 
    }).then((result)=>{
      if(result.isConfirmed){
        this._quiz.deleteQuiz(qId).subscribe((data:any)=>{
          this.quizzes = this.quizzes.filter((quizz:any)=>quizz!=qId);
          Swal.fire('Success!', 'Quiz deleted succesfully.', 'success')
        },
        (error)=>{
          console.log(error);
          Swal.fire('Error!', 'Error in deleting quiz.', 'error')
        }
        );
      }
    })
  }
}