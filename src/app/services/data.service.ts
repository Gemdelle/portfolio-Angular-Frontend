import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  portfolio: any;

  constructor(private httpClient: HttpClient) { }

  /* Devuelve todo */
  obtainData(): Observable<any>{
    return this.httpClient
      .get("https://portfolioap-9gj7.onrender.com/users/1")
      .pipe(
        map((portfolio: any) => {
          this.portfolio = portfolio;
          return portfolio;
        })
      );
  }

  updateUserPortfolio(): Observable<any> {
    return this.httpClient
    .post("https://portfolioap-9gj7.onrender.com/users/update/1", this.portfolio);
  }

  
  removeCourse(courseName: string) {
    this.portfolio = {
      ...this.portfolio,
      academies: this.portfolio.academies.map((academy: any) => {
        return {
          ... academy,
          courses: academy.courses.filter((course:any) => {
            return course.name !== courseName;
          })
        }
      })
    }
  }

  removeAcademy(academyName: string) {
    this.portfolio = {
      ...this.portfolio,
      academies: this.portfolio.academies.filter((academy:any) => {
        return academy.name !== academyName;
      })
    }
  }

  updateAcademy(academyName:string, academyEdited: any){
    this.portfolio = {
      ...this.portfolio,
      academies: this.portfolio.academies.map((academy:any) => {
        if (academyName == academy.name) {
          return academyEdited;
        }else {
          return academy;
        }
      })
    }
  }
}
