import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyets',
  templateUrl: './proyets.component.html',
  styleUrls: ['./proyets.component.css']
})
export class ProyetsComponent implements OnInit {

  proyects: any=[
    {
      titulo: 'Calculadora Basica (C++)',
      imageUrl: '../../../../assets/img/proyects/Calculadora.png',
      proyectUrl: 'https://github.com/Dancrof/Calculadora-C-mas-mas'
    },
    {
      titulo: 'Calculadora Basica (C#)',
      imageUrl: '../../../../assets/img/proyects/CalculadoraC.png',
      proyectUrl: 'https://github.com/Dancrof/Calculadora-Cshard'
    },
    {
      titulo: 'Operaciones Aritmeticas(C++)',
      imageUrl: '../../../../assets/img/proyects/aritmetica.png',
      proyectUrl: 'https://github.com/Dancrof/Aritmetica-Cshard'
    },
    {
      titulo: 'AnimexLatam',
      imageUrl: '../../../../assets/img/proyects/AnimexLatam.png',
      proyectUrl: 'http://animexlatam.epizy.com'
    },
    {
      titulo: 'Tienda de Pc',
      imageUrl: '../../../../assets/img/proyects/Ventas-pc.jpg',
      proyectUrl: 'https://github.com/Dancrof/Tienda-Pc'
    },
    {
      titulo: 'Ventanas',
      imageUrl: '../../../../assets/img/proyects/Venta-ventanas.jpg',
      proyectUrl: 'https://github.com/Dancrof/Tienda-Ventanas'
    },
    {
      titulo: 'Login Blog',
      imageUrl: '../../../../assets/img/proyects/Blog.png',
      proyectUrl: 'https://github.com/Dancrof/Blog-frontend'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
