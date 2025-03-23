import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private baseUrl = 'https://angulartest-93e44-default-rtdb.asia-southeast1.firebasedatabase.app/';

  constructor(private http: HttpClient) { }

  // Get about data from Firebase
  getAboutData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/resume/about.json`);
  }

  // Update about data in Firebase
  updateAboutData(aboutData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/resume/about.json`, aboutData);
  }

  // Get experience data from Firebase
  getExperienceData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/resume/experience.json`);
  }

  // Update experience data in Firebase
  updateExperienceData(experienceData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/resume/experience.json`, experienceData);
  }
  
  // Get education data from Firebase
  getEducationData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/resume/education.json`);
  }

  // Update education data in Firebase
  updateEducationData(educationData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/resume/education.json`, educationData);
  }
  
  // Get projects data from Firebase
  getProjectsData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/resume/projects.json`);
  }

  // Update projects data in Firebase
  updateProjectsData(projectsData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/resume/projects.json`, projectsData);
  }
  
  // Get skills data from Firebase
  getSkillsData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/resume/skills.json`);
  }

  // Update skills data in Firebase
  updateSkillsData(skillsData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/resume/skills.json`, skillsData);
  }
}
