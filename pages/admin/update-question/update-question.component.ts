import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent {
  public Editor = ClassicEditor;
  quesId=0;
  question:any;
  constructor(private _route:ActivatedRoute, private _question:QuestionsService, private _router:Router){}
  ngOnInit(): void{
    this.quesId=this._route.snapshot.params['qid'];
    console.log(this.quesId)
    this._question.getQuestion(this.quesId).subscribe((data:any)=>{
      this.question=data.data;
      console.log(this.question);
    })
  }

  //Update Question
  public updateSubmit(){
    this._question.updateQuestion(this.question).subscribe((data:any)=>{
      Swal.fire('Success !!', 'Quiz updated successfully.', 'success').then((e)=>{
        this._router.navigate(['/admin/view-questions/'+this.question.quiz.qid+'/'+this.question.quiz.title])
      });
    },
    (error)=>{
      Swal.fire('Error!!', 'Error in updating quiz.', 'error');
      console.log(error);
    })
  }
}
