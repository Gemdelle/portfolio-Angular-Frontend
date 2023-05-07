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
}
