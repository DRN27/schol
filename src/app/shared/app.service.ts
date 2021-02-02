import { Injectable } from '@angular/core';
import { Variant } from './data';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public selectedVariant: Variant;

  constructor() { }
}
