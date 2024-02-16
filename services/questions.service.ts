import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }
  //get questions
  public getQuizQuestions(qid:any){
    return this.http.get(`${baseUrl}v1/question/question/${qid}`)
  }

  //get question by questionId
  public getQuestion(qid:any){
    return this.http.get(`${baseUrl}v1/question/${qid}`)
  }
  //add question
  public addQuizQuestion(question:any){
    return this.http.post(`${baseUrl}v1/question/`,question)
  }

  //delete question
  public deleteQuestion(qId:any){
    return this.http.delete(`${baseUrl}v1/question/${qId}`)
  }

  //update question
  public updateQuestion(question:any){
    return this.http.put(`${baseUrl}v1/question/`, question);
  }
}