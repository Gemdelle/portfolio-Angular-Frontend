import { Academy } from "./academy.model";
import { Project } from "./project.model";
import { WorkExperience } from "./work-experience.model";

export class User {
    "id": number;
    "firstName": string;
    "lastName": string;
    "emailAddress": string;
    "password": string;
    "registrationDate": Date;
    workExperiences: WorkExperience[];
    academies: Academy[];
    projects: Project[];
  
    constructor() {
      this.workExperiences = [];
      this.academies = [];
      this.projects = [];
    }
  }

  
  