import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  apiUrl = "http://localhost:8080/api/conge"
  constructor(private http: HttpClient) { }

  getConges() {
    return this.http.get<any[]>(`${this.apiUrl}/findall`)
  }

  createConge(conge: any) {
    return this.http.post<any>(`${this.apiUrl}/create`, conge)
  }

  getCongeById(congeId: string) {
    return this.http.get<any>(`${this.apiUrl}/findone/${congeId}`)
  }

  updateConge(conge: any, congeId: string) {
    return this.http.put<any>(`${this.apiUrl}/confirm/${congeId}`, conge)
  }

  deleteConge(congeId: string) {
    return this.http.delete<any>(`${this.apiUrl}/delete/${congeId}`)
  }

}
