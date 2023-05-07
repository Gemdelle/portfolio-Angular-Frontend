import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: any;
  isHardSkillsActive:boolean = false;
  isSoftSkillsActive:boolean = false;
  activeSkill: any;

  constructor(private service: DataService){}

  ngOnInit(): void {
    this.service.obtainData().subscribe((data) => {
      this.skills = data.skills;
    });
  }

  activateSoftSkills(): void {
    this.isSoftSkillsActive = true;
  }
  activateHardSkills(): void {
    this.isHardSkillsActive = true;
  }
  deactivateSoftSkills(): void {
    this.isSoftSkillsActive = false;
  }
  deactivateHardSkills(): void {
    this.isHardSkillsActive = false;
  }

  showSoftSkillDescription(index: number): void {
    this.activeSkill = this.skills.soft[index];
  }

  showHardSkillDescription(index: number): void {
    this.activeSkill = this.skills.hard[index];
  }

  hideSkillDescription(): void {
    this.activeSkill = null;
  }
}
