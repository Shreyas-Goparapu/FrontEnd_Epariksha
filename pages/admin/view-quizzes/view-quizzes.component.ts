import { Component } from '@angular/core';
import { QuizzesService } from 'src/app/services/quizzes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})

export class ViewQuizzesComponent {
  quizzes : any;
  msg : any;
  constructor(private quiz: QuizzesService){}

  ngOnInit(): void {
    this.quiz.getQuizzes().subscribe((data:any)=>{
      this.quizzes=data.data;
      console.log(data);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!', 'Error in loading data', 'error')
    });
  }

  deleteQuiz(qId:any){
    Swal.fire({
      icon:'warning',
      title:'Are you sure, you want delete the quiz?',
      confirmButtonText:'Delete',
      showCancelButton:true 
    }).then((result)=>{
      if(result.isConfirmed){
        this.quiz.deleteQuiz(qId).subscribe((data:any)=>{
          this.msg=data.message;
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

