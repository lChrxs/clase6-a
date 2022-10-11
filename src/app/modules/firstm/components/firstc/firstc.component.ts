import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-firstc',
  templateUrl: './firstc.component.html',
  styleUrls: ['./firstc.component.scss']
})
export class FirstcComponent implements OnInit {
  
  public personaje$!: Observable<any> 

  constructor(private router: ActivatedRoute) {
    this.personaje$ = this.router.data.pipe(
      tap(console.log)
    )
    console.log(this.personaje$);
    
  }


  ngOnInit(): void {

    // console.log('In component: ');
    

    // this.router.data.subscribe({
    //   next: (res => {
    //      console.log(res);
        
    //   })
    // })

  }

}
