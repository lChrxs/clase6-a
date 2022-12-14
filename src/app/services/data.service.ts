import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/character')
  }

  getCharacter(name: string): Observable<any>{
    if(name){

      return this.http.get('https://rickandmortyapi.com/api/character/?name=' + name)
    }else {
      return this.http.get('https://rickandmortyapi.com/api/character/?name=undefined')
    }
  }

}
