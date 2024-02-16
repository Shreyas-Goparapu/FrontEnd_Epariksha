import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private http:HttpClient) { }

  public getQuizzes(){
    return this.http.get(`${baseUrl}v1/quiz/`)
  }

  //add quiz
  public addQuiz(quiz: any){
    return this.http.post(`${baseUrl}v1/quiz/`,quiz);
  }

  //delete quiz
  public deleteQuiz(qid:any){
    return this.http.delete(`${baseUrl}v1/quiz/${qid}`);
  }
  
  //get quiz by id
  public getQuiz(qid:any){
    return this.http.get(`${baseUrl}v1/quiz/${qid}`);
  }

  //get quiz by category
  public getQuizbyCategory(catId:any){
    return this.http.get(`${baseUrl}v1/quiz/category/${catId}`);
  }

  //update quiz
  public updateQuiz(quiz:any){
    return this.http.put(`${baseUrl}v1/quiz/`, quiz);
  }

  //get active quizzes
  public getActiveQuizzes(){
    return this.http.get(`${baseUrl}v1/quiz/active`)
  }

  //get active quizzes of category
  public getActiveQuizzesbyCategory(catId:any){
    return this.http.get(`${baseUrl}v1/quiz/category/active/${catId}`)
  }
}
