import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userService {

  apiUrl = "http://localhost:8080/api/user"
  constructor(private http: HttpClient) { }

  getusers() {
    return this.http.get<any[]>(`${this.apiUrl}/findall`)
  }

  createuser(user: any) {
    return this.http.post<any>(`${this.apiUrl}/create`, user)
  }

  getuserById(userId: string) {
    return this.http.get<any>(`${this.apiUrl}/findone/${userId}`)
  }

  updateuser(user: any, userId: string) {
    return this.http.put<any>(`${this.apiUrl}/update/${userId}`, user)
  }

  deleteuser(userId: string) {
    return this.http.delete<any>(`${this.apiUrl}/delete/${userId}`)
  }
}
