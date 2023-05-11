import { Tag } from "./tag.model";
import { User } from "./user.model";

export class Project {
    "id": number;
    "number": string;
    "type": string;
    "title": string;
    "description": string;
    "projectUrl": string;
    "background": string;
    "user": User;
    "tags": Tag[];
  
    constructor() {
      this.tags = [];
    }
  }