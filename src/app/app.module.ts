import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { StudentSearchComponent } from './student-search/student-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentEditComponent,
    NotFoundComponent,
    StudentNewComponent,
    StudentSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
