import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent {
  quizId=0;
  quizTitle='';
  questions=[{
    "quesId": '',
    "content": "",
    "image": "string",
    "option1": "",
    "option2": "",
    "option3": "",
    "option4": "",
    "answer": "",
    "quiz": {
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
    }
  }];
  constructor(private _route:ActivatedRoute, private _question:QuestionsService){}
  ngOnInit() : void{
    this.quizId=this._route.snapshot.params['id'];
    this.quizTitle=this._route.snapshot.params['title'];
    // console.log(this.quizId);
    // console.log(this.quizTitle);
    this._question.getQuizQuestions(this.quizId).subscribe((data:any)=>{
      console.log(data.data);
      this.questions=data.data;
    },
    (error)=>{
      console.log(error);
      
    })
   }
   //delete question
   public deleteQuestion(qId:any){
    Swal.fire({
      icon:'warning',
      title:'Are you sure, you want delete this question?',
      confirmButtonText:'Delete',
      showCancelButton:true 
    }).then((result)=>{
      if(result.isConfirmed){
        this._question.deleteQuestion(qId).subscribe((data:any)=>{
          this.questions = this.questions.filter((q:any)=>q.quesId!=qId);
          Swal.fire('Success!', 'Question deleted succesfully.', 'success')
        },
        (error)=>{
          console.log(error);
          Swal.fire('Error!', 'Error in deleting question.', 'error')
        }
        );
      }
    })
  }
}
// 0
// : 
// active
// : 
// true
// category
// : 
// cid
// : 
// 1
// description
// : 
// "this category has quizzes desgned for mastering programming kanguages"
// title
// : 
// "Programming"
// [[Prototype]]
// : 
// Object
// description
// : 
// "Fundaments of python such as data types, String, Arrays and Loops"
// maxMarks
// : 
// "100"
// numberOfQuestions
// : 
// "10"
// qid
// : 
// 2
// title
// : 
// "Python Basics"