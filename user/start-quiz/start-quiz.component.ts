import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

export interface result_data {
  details: string;
  info: string;
}

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent {
  qid = 0;
  questions = [{
    "quesId": '',
    "content": "",
    "image": "string",
    "option1": "",
    "option2": "",
    "option3": "",
    "option4": "",
    "answer": "",
    "selectedAnswer": "",
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
  marksObtained = 0
  crtAnswers = 0
  attemptedQuestions = 0
  marksForEachQuestion = 0
  isSubmit = false
  startDate: any;
  endDate: any;
  accuracy = 0
  timer: any;
  timeTaken: any;

  constructor(private locationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionsService,
  ) { }
  ngOnInit(): void {
    this.startDate = new Date();
    this.qid = this._route.snapshot.params['qid'];
    this.preventBackBtn()
    this.loadquestions()
  }
  preventBackBtn() {
    history.pushState(null, '', location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, '', location.href);
    })
  }

  loadquestions() {
    this._question.getQuizQuestions(this.qid).subscribe((data: any) => {
      this.questions = data.data
      this.questions.forEach((q) => {
        q.selectedAnswer = '';
      });
      console.log((this.questions));
      this.timer = this.questions.length * 2 * 60
      this.startTimer()
    },
      (error) => {
        console.log(error)
        Swal.fire("Error!", "Error in loading questions!", 'error')
      })
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: "warning"
    }).then((result) => {
      if (result.isConfirmed) {
        this.endDate = new Date()
        this.isSubmit = true
        this.timeTaken = this.questions.length * 2 * 60 - this.timer
        this.questions.forEach(q => {
          if (q.selectedAnswer == q.answer) {
            this.crtAnswers++
            this.marksForEachQuestion = Number(this.questions[0].quiz.maxMarks) / this.questions.length
          }
          this.marksObtained = Math.floor(this.marksForEachQuestion * this.crtAnswers)
          if (q.selectedAnswer.trim() != '') {
            this.attemptedQuestions++
          }
          this.accuracy = (this.crtAnswers / this.attemptedQuestions) * 100
        })
      }
    })
  }

  startTimer() {
    let t = window.setInterval(() => {
      //code
      if (this.timer <= 0) {
        this.submitQuiz();
        clearInterval(t);
      } else {
        this.timer--
      }
    }, 1000);
  }

  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} Min : ${ss} Sec`
  }
}
