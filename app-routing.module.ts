import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { ViewQuizComponent } from './pages/user/view-quiz/view-quiz.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { ViewQuizzesByCategoryComponent } from './pages/admin/view-quizzes-by-category/view-quizzes-by-category.component';

const routes: Routes = [{ path: '', component: HomeComponent, pathMatch: 'full' }, 
{ path: 'register', component: RegisterComponent, pathMatch: 'full' },
{ path: 'login', component: LoginComponent, pathMatch: 'full' }, 
{ path: 'contacts', component: ContactComponent, pathMatch: 'full' },
{ 
  path: 'admin', 
  component: AdminDashboardComponent, 
  children:[
    {
      path:'',
      component: WelcomeComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'categories',
      component: ViewCategoriesComponent
    },
    {
      path: 'add-category',
      component: AddCategoriesComponent
    },
    {
      path: 'quizzes',
      component: ViewQuizzesComponent
    },
    {
      path: 'add-quiz',
      component: AddQuizComponent
    },
    {
      path: 'quiz/:qid',
      component: UpdateQuizComponent
    },
    {
      path: 'view-questions/:id/:title',
      component: ViewQuizQuestionsComponent
    },
    {
      path: 'add-question/:qid/:title',
      component: AddQuestionsComponent
    },
    {
      path: 'update-question/:qid',
      component: UpdateQuestionComponent
    },
    {
      path: 'view-quiz-by-category/:cId',
      component: ViewQuizzesByCategoryComponent
    }

]
},
{ 
  path: 'user-dashboard', 
  component: UserDashboardComponent, 
  children: [
    {
      path:'',
      component:WelcomeUserComponent
    },
    {
      path:'quizzes/:qid',
      component:LoadQuizComponent
    },
    {
      path:'view-quiz/:qid',
      component:ViewQuizComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
  ]
},
{ path:'start-quiz/:qid' , component:StartQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
