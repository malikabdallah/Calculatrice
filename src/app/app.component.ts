import { Component, OnInit } from '@angular/core';
import { AppareilService } from './appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 


  isAuth = false;

  appareils: any[];

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;

   
  }
  constructor(private appareilService:AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  title = 'monproject';



  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
}
  
}
