import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  aba = 'meu-periodo';

  ngOnInit() {
    console.log('Componente iniciado');
  }

  // setAba(aba:string){
  //   this.aba = aba;
  //
  // }

}
