import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./interfaces/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }

  createUser(payload: Partial<User>): Observable<User> {
    return this.http.post<User>(this.baseUrl, payload);
  }

  updateUser(id: number, payload: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/${id}`, payload);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }
}
