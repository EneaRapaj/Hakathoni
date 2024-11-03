import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from '../interfaces/developer'; // Adjust import path as per your project structure
import { Projects } from '../interfaces/projects';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  private apiUrl = 'http://localhost:8080/api/person'; // Adjust URL as per your backend API endpoint

  constructor(private http: HttpClient) {}

  getAllDevelopers(): Observable<Developer[]> {
    return this.http.get<Developer[]>(`${this.apiUrl}`);
  }

  getDeveloper(personId: number): Observable<Developer> {
    return this.http.get<Developer>(`${this.apiUrl}/${personId}`);
  }

  addDeveloper(developer: Developer): Observable<Developer> {
    return this.http.post<Developer>(`${this.apiUrl}`, developer);
  }


  updateDeveloper(personId: number, developer: Developer): Observable<Developer> {
    return this.http.put<Developer>(`${this.apiUrl}/${personId}`, developer);
  }

  deleteDeveloper(personId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${personId}`);
  }

  getDeveloperWithProjects(personId: number): Observable<Developer> {
    return this.http.get<Developer>(`${this.apiUrl}/${personId}/projects`);
  }

  getProjectsByDeveloper(personId: number): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.apiUrl}/person/${personId}/projects`);
  }
  getAllProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.apiUrl}/projects`);
  }

  getfindBySkill(skills:string):Observable<any[]> {

    return this.http.get<Developer[]>(`${this.apiUrl}/findBySkill?skill=${skills}`)
  }

  getDevelopersByExperience(experience: string): Observable<Developer[]> {
    return this.http.get<Developer[]>(`${this.apiUrl}/findByExperience?experience=${experience}`);
  }
  createPerson(personData: any): Observable<Developer> {
    return this.http.post<Developer>(`${this.apiUrl}`, personData);
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/projects`); // Adjust endpoint as needed
  }
  assignProjectToPerson(personId: number, projectId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${personId}/projects/${projectId}`, {});
  }
}
