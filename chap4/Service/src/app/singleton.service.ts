import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService {

  constructor() { }

  public doStuff():void{
        console.log("stuff");
  }

}
