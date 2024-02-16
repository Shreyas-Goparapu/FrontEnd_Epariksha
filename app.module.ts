import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './pages/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { ContactComponent } from './pages/contact/contact.component';
import { MatTooltipModule} from '@angular/material/tooltip';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotPasswordDialogComponent } from './components/forgot-password-dialog/forgot-password-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotUsernameDialogComponent } from './components/forgot-username-dialog/forgot-username-dialog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './services/auth.interceptor';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SidebarUserComponent } from './pages/user/sidebar-user/sidebar-user.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { ViewQuizComponent } from './pages/user/view-quiz/view-quiz.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ShowquizofcategoryComponent } from './pages/admin/showquizofcategory/showquizofcategory.component';
import { ViewQuizzesByCategoryComponent } from './pages/admin/view-quizzes-by-category/view-quizzes-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    ForgotPasswordDialogComponent,
    ForgotUsernameDialogComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionsComponent,
    UpdateQuestionComponent,
    SidebarUserComponent,
    LoadQuizComponent,
    WelcomeUserComponent,
    ViewQuizComponent,
    StartQuizComponent,
    ShowquizofcategoryComponent,
    ViewQuizzesByCategoryComponent
  ],
  // entryComponents: [ForgotPasswordDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatExpansionModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
