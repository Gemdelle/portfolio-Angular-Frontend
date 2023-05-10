import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any;

  constructor(private service: DataService){}

  ngOnInit(): void {
    this.service.obtainData().subscribe((data) => {
      this.projects = data.projects.map((project: any)=> {
        if(project.type == "HISTORY") {
          return {
            ...project,
            data: {
              ...project.data,
              subprojects: project.data.subprojects.map((subproject:any, index: number) => {
                return {
                  ...subproject,
                  isActive: index == 0
                }
              })
            }
          }
        }

        return project;
      });
    });
  }

  goNextSubProject(index: number) {
    let activeSubproject = this.getActiveSubProject(index);
    let i = this.projects[index].data.subprojects.findIndex((sub:any)=> {
      return sub === activeSubproject;
    });

    this.projects = this.projects.map((project: any, indice: number)=> {
      if(indice == index) {
        return {
          ...project,
          data: {
            ...project.data,
            subprojects: project.data.subprojects.map((subproject:any, subIndex: number) => {
              return {
                ...subproject,
                isActive: subIndex == (i+1)
              }
            })
          }
        }
      }

      return project;
    });

  }

  goPreviousSubProject(index: number) {
    let activeSubproject = this.getActiveSubProject(index);
    let i = this.projects[index].data.subprojects.findIndex((sub:any)=> {
      return sub === activeSubproject;
    });
    this.projects = this.projects.map((project: any, indice: number)=> {
      if(indice == index) {
        return {
          ...project,
          data: {
            ...project.data,
            subprojects: project.data.subprojects.map((subproject:any, subIndex: number) => {
              return {
                ...subproject,
                isActive: subIndex == (i-1)
              }
            })
          }
        }
      }

      return project;
    });
  }

  getActiveSubProject(index: number): any {
    let subproject = this.projects[index].data.subprojects.find((subproject:any) => {
        return subproject.isActive
    });
    return subproject;
  }

  isUniqueSubProject(index: number): boolean {
    let subproject = this.getActiveSubProject(index);
    return subproject.fcc_style_url == null;
  }
}
