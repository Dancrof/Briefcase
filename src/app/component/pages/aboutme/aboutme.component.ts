import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  //conocimientos
  knowledge: any = [
    {
      titulo: 'C++',
      imageUrl: '../../../../assets/img/about/knowledge/logoc++.png'
    },
    {
      titulo: 'C#',
      imageUrl: '../../../../assets/img/about/knowledge/logoCcharp.png'
    },
    {
      titulo: 'Html 5',
      imageUrl: '../../../../assets/img/about/knowledge/LogoHtmlSinFondo.png',
    },
    {
      titulo: 'Css 3',
      imageUrl: '../../../../assets/img/about/knowledge/CssSinFondo.png',
    },
    {
      titulo: 'JavaScript',
      imageUrl: '../../../../assets/img/about/knowledge/JsSinFondo.png',
    },
    {
      titulo: 'TypeScript',
      imageUrl: '../../../../assets/img/about/knowledge/Typescript.svg.png',
    },
    {
      titulo: 'Node Js',
      imageUrl: '../../../../assets/img/about/knowledge/NodeJs.png',
    },
    {
      titulo: 'Git',
      imageUrl: '../../../../assets/img/about/knowledge/Git.png',
    },
    {
      titulo: 'jQuery',
      imageUrl: '../../../../assets/img/about/knowledge/Jquery.png',
    }
  ];
  
  //Frameworks
  Frameworks: any = [
    {
      titulo: 'Visual Studio 2019',
      imageUrl: '../../../../assets/img/about/Frameworks/logovisualstudio.png'
    },
    {
      titulo: 'Visual Studio Code',
      imageUrl: '../../../../assets/img/about/Frameworks/logovisualcode.png'
    },
    {
      titulo: 'dev-C++',
      imageUrl: '../../../../assets/img/about/Frameworks/logodevc++.png'
    },
    {
      titulo: 'Angular Cli',
      imageUrl: '../../../../assets/img/about/Frameworks/Angular.png'
    },
    {
      titulo: 'Nest Js',
      imageUrl: '../../../../assets/img/about/Frameworks/NestJs.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
