import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizzesService } from 'src/app/services/quizzes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
  categories: any;

  quizData = {
    title: '',
    description: '',
    numberOfQuestions: '',
    maxMarks: '',
    active: true,
    category: {
      cid: ''
    }
  };

  constructor(private category: CategoryService, private snack: MatSnackBar, private quiz_cat: QuizzesService) { }

  ngOnInit(): void {
    this.category.categories().subscribe((data: any) => {
      this.categories = data.data;
      console.log(this.categories)
    },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'Error in loading data from server', 'error')
      })
  }

  addQuiz() {
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this.snack.open("Title is required !!", '', {
        duration: 2000
      });
      return;
    }

    this.quiz_cat.addQuiz(this.quizData).subscribe((data: any) => {
      Swal.fire('Success!', 'Quiz added successfully', 'success')
      this.quizData = {
        title: '',
        description: '',
        numberOfQuestions: '',
        maxMarks: '',
        active: true,
        category: {
          cid: ''
        }
      };
    },
      (error) => {
        console.log(error);
        Swal.fire('Error!', 'Quiz was not added', 'error')
      });
  }

}

