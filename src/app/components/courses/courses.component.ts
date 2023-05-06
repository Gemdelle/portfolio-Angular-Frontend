import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  academies: any;

  constructor(private service: DataService){}

  ngOnInit(): void {
    this.service.obtainData().subscribe((data) => {
      this.academies = data.academies;
    })
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
}
