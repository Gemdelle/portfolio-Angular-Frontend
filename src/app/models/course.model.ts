import { Academy } from "./academy.model";

export class Course {
    "id": number;
    "name": string;
    "description": string;
    "certificate": string;
    "academy": Academy;
  }