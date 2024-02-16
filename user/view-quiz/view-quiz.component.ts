import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzesService } from 'src/app/services/quizzes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent {
  qid=0;
  quiz : any;
  constructor(private _route:ActivatedRoute, private _quiz:QuizzesService, private _router:Router){}

  ngOnInit(): void{
    this.qid=this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qid).subscribe((data:any)=>{
      this.quiz = data.data 
      console.log(this.quiz);
      
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!', 'Error in loading data', 'error')
    })
  }

  startquiz(){
    Swal.fire({
      title: 'Do you want to start the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      icon: 'info'
    }).then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['/start-quiz/'+this.qid]);
      } 
    })
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
}
