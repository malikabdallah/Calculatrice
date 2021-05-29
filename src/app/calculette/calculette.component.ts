import { Component, OnInit } from '@angular/core';
import { CalculetteService } from '../service/calculette.service';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {


  public op1:string;
  public op2:string;
  public op:string;

  public resultat:string;
  constructor(private calculetteService:CalculetteService) { }

  ngOnInit(): void {
  }

  operation(oper:string){
    if(oper == "additioner"){
      this.op="+";
      let res=parseInt(this.op1)+parseInt(this.op2);
      this.resultat=this.op1+" + "+this.op2+" = "+res;
    }else if(oper == "suppression"){
      this.op="-";
      let res=parseInt(this.op1)-parseInt(this.op2);
      this.resultat=this.op1+" - "+this.op2+" = "+res;


    }else {
      this.op="*";
      let res=parseInt(this.op1)*parseInt(this.op2);
      this.resultat=this.op1+" * "+this.op2+" = "+res;

    }
  }
}
