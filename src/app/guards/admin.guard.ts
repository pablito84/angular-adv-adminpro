import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor( private usuarioService: UsuarioService,
               private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      console.log('adminguard');


      if ( this.usuarioService.role === 'ADMIN_ROLE' ) {
      return true;
    } else {
      this.router.navigateByUrl('/dashboard');
      return false;
    }
   /// con ternario el if seria asi: return ( this.usuarioService.role === 'ADMIN_ROLE') ? true : false;

  }

}
