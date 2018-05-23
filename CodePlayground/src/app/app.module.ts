import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { StarComponent } from './star/star.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './github-followers.service';
import { ErrorHandler } from '@angular/core/src/error_handler';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    AuthorsComponent,
    StarComponent,
    TitleCaseComponent,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    GithubFollowersComponent,
    HomeComponent,
    NotFoundComponent,
    ArchiveComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'archive/:year/:month', component: ArchiveComponent },
      { path: '**', component: NotFoundComponent } 
    ])
  ], 
  providers: [
    AuthorsService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
