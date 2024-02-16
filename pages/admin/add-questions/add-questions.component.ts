import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent {
  public Editor = ClassicEditor;
  quiztitle='';
  quizId=0;
  question={
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quiz:{
      qid : 0,
    },
  };
  constructor(private _route:ActivatedRoute, private _question:QuestionsService,
     private snack:MatSnackBar, private _router:Router){}

  ngOnInit(): void{
    this.quizId=this._route.snapshot.params['qid'];
    this.quiztitle=this._route.snapshot.params['title'];
    this.question.quiz['qid']=Number(this.quizId);
  }

  questionSubmit(){
    if(this.question.content.trim()=='' || this.question.content.trim()==null)
    this.snack.open("Content is required !!", '', {
      duration: 2000
    });
    if(this.question.option1.trim()=='' || this.question.option1.trim()==null)
    this.snack.open("Option is required !!", '', {
      duration: 2000
    });
    if(this.question.option2.trim()=='' || this.question.option2.trim()==null)
    this.snack.open("Option is required !!", '', {
      duration: 2000
    });
    if(this.question.answer.trim()=='' || this.question.answer.trim()==null)
    this.snack.open("Answer is required !!", '', {
      duration: 2000
    });
    this._question.addQuizQuestion(this.question).subscribe((data:any)=>{
      Swal.fire('Success!', 'Question added successfully', 'success').then((e)=>{
        this._router.navigate(['/admin/view-questions/'+this.quizId+'/'+this.quiztitle])
      });
    },
    (error)=>{
      Swal.fire('Error!', 'Question was not added', 'error')
    })
  }

}
