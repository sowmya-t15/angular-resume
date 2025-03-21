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
}
