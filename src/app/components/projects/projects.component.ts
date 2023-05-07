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

  getActiveSubProject(index: number): any {
    return this.projects[index].data.subprojects.find((subproject: any) => {
      return subproject.isActive
  });
  }
}
