import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: any;

  constructor(private service: DataService){}

  ngOnInit(): void {
    this.service.obtainData().subscribe((data) => {
      this.skills = data.skills;
    })
  }
}
