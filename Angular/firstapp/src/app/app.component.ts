import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy{

  ngOnDestroy(): void{
    console.log(" from ngOnInit");
  }

  ngOnChanges(): void{
    console.log("from ngOnChanges");
  }

  ngOnInit(): void{
    console.log("from ngOnDestroy");
  }
  
  title = 'Linitha';
  course = 'FSD Training';
  company = 'UST';
}
