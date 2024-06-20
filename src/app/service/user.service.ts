import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:5000/api/user';
  url2 = 'http://localhost:5000/api/user/login';
  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
  addUser(user: any): Observable<User> {
    return this.http.post<User>(this.url,  user );
  }
  editUser(user: any): Observable<User> {
    return this.http.patch<User>(this.url, user)
  }
  deleteUser(id: any): Observable<User> {
    return this.http.delete<User>(this.url + '/' + id)
  }
  login(user: any): Observable<User> {
    return this.http.post<User>(this.url2, user)
  }
}
