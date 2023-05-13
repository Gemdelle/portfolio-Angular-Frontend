import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any[] = [];

  currentFilter: string[] = [];
  filteredProjects: any = []
  constructor(private service: DataService){}
  
  activeIndex:number = 0;
  
  subprojectIndex!:number;

  ngOnInit(): void {
    this.service.obtainData().subscribe((data) => {
      data.projects.forEach((element: any) => {
        this.projects.push(element);
        element.type === "HISTORY" ? this.subprojectIndex = this.projects.indexOf(element) : null;
      });  
    });

    
    console.log(this.projects)
    this.filteredProjects = this.projects;
    };

  filterTag(tags: string[]): void {
    console.log(this.subprojectIndex)
    console.log(this.filteredProjects)
    this.currentFilter = tags;
    
  }

  goNextSubProject() : void{

    this.activeIndex < this.projects[this.subprojectIndex].data.subprojects.length -1 ? this.activeIndex++ : this.activeIndex = 0;
    console.log(this.activeIndex)
  }

  goPreviousSubProject() : void {
    this.activeIndex > 0 ? this.activeIndex-- : this.activeIndex = this.projects[1].data.subprojects.length -1; 
    console.log(this.activeIndex)
    console.log(this.projects[this.subprojectIndex].data.subprojects[this.activeIndex].fcc_style_url)
  }

  getActiveSubProject(): any {
    return this.projects[this.subprojectIndex].data.subprojects[this.activeIndex];
  }


  isUniqueSubProject(): boolean {
    const activeSP = this.getActiveSubProject()
    return activeSP.fcc_style_url === null;
  }


}
