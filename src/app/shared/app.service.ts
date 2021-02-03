import { Injectable } from '@angular/core';
import { Variant, Word } from './data';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public selectedVariant: Variant;
  public workOnMistakes:boolean = false;
  public rightAnswersList: Word[] = [];
  public wrongAnswersList: Word[] = [];

  constructor() { }
}
