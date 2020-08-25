import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store'
import { UUID } from './models/uuid.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsentGuard implements CanActivate {

  constructor(private store: Store, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.store.select(state => <UUID>state.gameStore.uuid).pipe(map(ObsStr => {
      if (ObsStr.length === 36) {
        return true;
      } else {
        return this.router.parseUrl('/consent');
      }
    }))
  }
}
