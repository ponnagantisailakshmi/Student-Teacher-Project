import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { MarksStudentComponent } from './marks-student/marks-student.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    CreateTeacherComponent,
    TeacherDetailsComponent,
    UpdateTeacherComponent,
    TeacherListComponent,
    MarksStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
