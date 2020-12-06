import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afa: AngularFireAuth) {}

  createUser(email: string, password: string): Promise<any> {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<any> {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    return this.afa.signOut();
  }

  hasUser(): Observable<any> {
    return this.afa.authState;
  }
}
