import { Component } from '@angular/core';
import { QuizzesService } from 'src/app/services/quizzes.service';

@Component({
  selector: 'app-showquizofcategory',
  templateUrl: './showquizofcategory.component.html',
  styleUrls: ['./showquizofcategory.component.css']
})
export class ShowquizofcategoryComponent {
  quizzes : any;
  constructor(private _quiz:QuizzesService){}
  ngOnInit() : void {
    this._quiz
  }
}
