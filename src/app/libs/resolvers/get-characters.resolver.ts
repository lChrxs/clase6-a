import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, concatMap, Observable, of, filter } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetCharactersResolver implements Resolve<boolean> {

  public id?: number

  constructor(
    private dataS: DataService,
    private router: Router,
    private _route: ActivatedRoute
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log('resolver => ', route);
    
    //Of es un observable, se tiene que retornar un observable porque el resolve regresa un Observable
    return this.dataS.getCharacters().pipe(
      concatMap(res => {

        let name: string = route.queryParams['name']
          
        let temp = (res.results as any[]).find(
          (item) => {
            // console.log(item);
            return item.name.toLowerCase().includes(name.toLowerCase())
          })?.name
        
        if(!temp){
          throw new HttpErrorResponse({
            error: 'No se encontro el nombre',
            status: 404,
          })
        }

        // console.log(temp);
        return this.dataS.getCharacter(temp)
        
      }),
      catchError(err => {
        if(err instanceof HttpErrorResponse && err.status === 404){
          this.router.navigate(['404'])
        }
        console.error(err);
        

        return err
      })
    )
  }
}
