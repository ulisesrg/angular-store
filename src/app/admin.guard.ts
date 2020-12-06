import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './core/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.hasUser().pipe(
      // tap((user) => console.log(user)), // for debugging
      // Method 1
      map((user) => (user === null ? false : true)),
      tap((hasUser) => {
        if (!hasUser) {
          this.router.navigate(['/auth/login']);
        }
      })

      // Method 2
      // map((user) => (user ? true : this.router.parseUrl('/auth/login')))
    );
  }
}
