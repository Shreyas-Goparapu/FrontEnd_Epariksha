import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizzesService } from 'src/app/services/quizzes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {
  categories: any;
  constructor(private _route:ActivatedRoute, private _quiz:QuizzesService, private _category:CategoryService, private _router:Router){}
  quizid=0
  quiz:any;
  ngOnInit(): void{
    //get catgories
    this._category.categories().subscribe((data: any) => {
      this.categories = data.data;
      console.log(this.categories)
    },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'Error in loading data from server', 'error')
      })

    this.quizid=this._route.snapshot.params['qid'];
    
    //accessing the quiz data
    this._quiz.getQuiz(this.quizid).subscribe(
      (data:any)=>{
        this.quiz=data.data;
        console.log(this.quiz)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  //update from-submit
  public updateSubmit(){
    this._quiz.updateQuiz(this.quiz).subscribe((data:any)=>{
      Swal.fire('Success !!', 'Quiz updated successfully.', 'success').then((e)=>{
        this._router.navigate(['/admin/quizzes'])
      });
    },
    (error)=>{
      Swal.fire('Error!!', 'Error in updating quiz.', 'error');
      console.log(error);
    })
  }

}
