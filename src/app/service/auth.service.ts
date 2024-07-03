import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticatedUser(): boolean {
    let token = localStorage.getItem("Token" || "")
    if (token !== null && token !== "") {
      return true
    } else {
      return false
    }
  }
}
