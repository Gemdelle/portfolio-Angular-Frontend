import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  academies: any;
  isAdminLoggedIn: boolean = false;
  academyInEdition: any;

  constructor(private service: DataService, private userService: UserService){}

  ngOnInit(): void {
    this.fetchAcademies();
    this.isAdminLoggedIn = this.userService.userIsLoggedIn();
    this.observeAdminLogin();
  }

  private observeAdminLogin() {
    setInterval(() => {
      this.isAdminLoggedIn = this.userService.userIsLoggedIn();
      if (!this.isAdminLoggedIn) {
        this.academyInEdition = null;
      }
    }, 1000);
  }

  fetchAcademies(){
    this.service.obtainData().subscribe((data) => {
      this.academies = data.academies;
    });
  }

  onAccordionClick(event: any) {
    const $accordion = event.currentTarget;
    $accordion.classList.toggle("is-open");
    let content = $accordion.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = "8vw";
      console.log(content.style.maxHeight);
    }
  }

  isAcademyInEdition(academyName: string): boolean {
    return this.academyInEdition && (this.academyInEdition.name == academyName);
  }

  scrolltoId(id: string) {
    var bwidth = window.innerWidth;
    var percent = 0.027;
    var wpercent = bwidth * percent;

    var access = document.getElementById(id)!;
    const offsetPosition = access.offsetTop - wpercent

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
  }

  applyChanges(){
    this.service.updateUserPortfolio().subscribe(() => {
      this.fetchAcademies();
    });
  }

  deleteCourse(courseName: string) {
    this.service.removeCourse(courseName);
    this.applyChanges();
  }

  deleteAcademy(academyName: string) {
    this.service.removeAcademy(academyName);
    this.applyChanges();
  }

  editAcademy(academyName: string) {
    this.academyInEdition = this.academies.filter((academy: any) => academy.name == academyName)[0];
  }

  applyAcademyChanges(academyName: string) {
    this.service.updateAcademy(academyName, this.academyInEdition);
    this.applyChanges();
    this.academyInEdition = null;
  }

  academyLogoChanged($event: any) {
    let editedLogo = $event.currentTarget.value;
    this.academyInEdition = {
      ...this.academyInEdition,
      logo: editedLogo
    }
    debugger;
  }

  academyNameChanged($event: any) { 
    let editedName = $event.currentTarget.value;
    this.academyInEdition = {
      ...this.academyInEdition,
      name: editedName
    }
    debugger;
  }

  courseNameChanged(courseName:string, $event: any) {
    let editedCourseName =  $event.currentTarget.value;
    this.academyInEdition = {
      ...this.academyInEdition,
      courses: this.academyInEdition.courses.map((course: any) => {
        if (course.name == courseName){
          return {
            ...course,
            name: editedCourseName
          };
        } else {
          return course;
        }
      })
    }
  }

  courseDescriptionChanged(courseName:string, $event: any) {
    let editedCourseDescription =  $event.currentTarget.value;
    this.academyInEdition = {
      ...this.academyInEdition,
      courses: this.academyInEdition.courses.map((course: any) => {
        if (course.name == courseName){
          return {
            ...course,
            description: editedCourseDescription
          };
        } else {
          return course;
        }
      })
    }
  }

  courseCertificateChanged(courseName:string, $event: any) {
    let editedCourseCertificate =  $event.currentTarget.value;
    this.academyInEdition = {
      ...this.academyInEdition,
      courses: this.academyInEdition.courses.map((course: any) => {
        if (course.name == courseName){
          return {
            ...course,
            certificate: editedCourseCertificate
          };
        } else {
          return course;
        }
      })
    }
  }

}
