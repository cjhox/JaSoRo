import {Injectable} from '@angular/core';
import {CanLoad} from '@angular/router';

@Injectable()
export class AuthService implements CanLoad {
  public canLoad() {
    return false;
  }
}
