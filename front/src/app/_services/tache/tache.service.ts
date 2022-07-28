import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  apiUrl = "http://localhost:8080/api/tache"
  constructor(private http: HttpClient) { }

  gettaches() {
    return this.http.get<any[]>(`${this.apiUrl}/findall`)
  }

  createtache(tache: any) {
    return this.http.post<any>(`${this.apiUrl}/create`, tache)
  }

  gettacheById(tacheId: string) {
    return this.http.get<any>(`${this.apiUrl}/findone/${tacheId}`)
  }

  updatetache(tache: any, tacheId: string) {
    return this.http.put<any>(`${this.apiUrl}/confirm/${tacheId}`, tache)
  }

  deletetache(tacheId: string) {
    return this.http.delete<any>(`${this.apiUrl}/delete/${tacheId}`)
  }
}
