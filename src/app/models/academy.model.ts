import { Course } from "./course.model";
import { User } from "./user.model";

export class Academy {
    "id": number;
    "name": string;
    "shield": string;
    "logo": string;
    "user": User;
    "courses": Course[];
  
    constructor() {
      this.courses = [];
    }
  }