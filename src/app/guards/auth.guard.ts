import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    console.log(this.authService.isLoggedIn())
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/person-list']);
    }
    return !this.authService.isLoggedIn();
  }
  
}
