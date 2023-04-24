import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {

  num: number=0;

  r: any = 0;
  

  factorial(num :number)
  {
    var fact=1;
    for(var i=1;i<=this.num;i++)
    {
       fact = fact*i;
    }
  this.r =  fact;
  }

  prime(num: number){
    var count = 0;
    for(var i=1;i<=this.num;i++)
    {
      if(this.num%i==0)
        count++;
    }
  }

}

