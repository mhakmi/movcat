import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { User } from '@firebase/auth-types';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private _authState: Observable<User> = null;
  private _user: User = null;

  /**
   * Creates an instance of AuthService.
   * 
   * @param {AngularFireAuth} _afAuth 
   * @param {Router} _router 
   * @memberof AuthService
   */
  constructor(private _afAuth: AngularFireAuth,
              private _router:Router) 
  {
    this._authState = this._afAuth.authState;
    this._authState.subscribe((user) => {
      this._user = user;
    })
  }

  /**
   * returns Observable of true if user logged in
   * 
   * @readonly
   * @type {Observable<boolean>}
   * @memberof AuthService
   */
  get isAuthenticated(): Observable<boolean> {
    return new Observable<boolean>(o => {
      this._authState.subscribe((auth) => {
        if(auth) {
          o.next(true)
        } else {
          o.next(false)
        }
      })
    })
  }
  
  /**
   * reutrns currently logged-in user data, or null
   * 
   * @readonly
   * @type {User}
   * @memberof AuthService
   */
  get loggedUser(): User {
    return this._user;
  }

  /**
   * returns currently logged-in user ID, or null
   * 
   * @readonly
   * @type {string}
   * @memberof AuthService
   */
  get loggedUserID(): string {
    return this._user? this._user.uid : null
  }

  /**
   * register new user using email and password
   * 
   * @param {string} email 
   * @param {string} password 
   * @returns {Promis<any>} promise containing firebase user object
   * @memberof AuthService
   */
  signUpWithEmail(email: string, password: string): Promise<any> {
    return this._afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * sign in user with email and password
   * 
   * @param {string} email 
   * @param {string} password 
   * @returns {Promis<any>} promise containing firebase user object
   * @memberof AuthService
   */
  loginWithEmail(email: string, password: string) {
    return this._afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Sends a password reset email to the given email address.
   * 
   * @param {string} email 
   * @returns Promis containing void
   * @memberof AuthService
   */
  resetPassword(email: string) {
    return this._afAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent successfuly...'))
      .catch(error => console.log('reset password email send error: ', error));
  }

  /**
   * sign out the currently logged user, and redirect to home page
   * 
   * @memberof AuthService
   */
  signOut() {
    this._afAuth.auth.signOut()
      .then(() => {
        this._router.navigateByUrl('/')
      })
      .catch((error) => {
        console.log('SignOut error: ', error)
      })
  }

}
