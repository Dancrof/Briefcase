import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  curriculun = {
    titulo: 'Web developer',
    parrafo: 'Un Programador Al Nacer No Llora Dice "Hola Mundo".',
    download: '../../../../assets/doc/Curriculum New.pdf',
    cv: 'Curriculum'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
