import { Component } from '@angular/core';
import { Articulo } from './articulo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Administración de artículos';
  codigoInput = 0.0;
  descripcionInput = '';
  precioInput = 0.0;

  articulos: Articulo[] = [
    new Articulo(1,'papas',10.55),
    new Articulo(2,'manzanas',12.1),
    new Articulo(3,'melón',52.3),
    new Articulo(4,'cebollas',17),
    new Articulo(5,'calabaza',20)
  ]

  agregarArticulo(){
    let artaux = new Articulo(this.codigoInput, this.descripcionInput, this.precioInput);
    this.articulos.push(artaux);
  }
}
