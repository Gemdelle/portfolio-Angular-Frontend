import { Role } from "./role.model";
import { User } from "./user.model";

export class WorkExperience {
    "id": number;
    "studioName": string;
    "description": string;
    "logo": string;
    "startDate": Date;
    "endDate": Date;
    "user": User;
    "roles": Role[];
  
    constructor() {
      this.roles = [];
    }
  }