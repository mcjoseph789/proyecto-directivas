import { Component } from '@angular/core';
import { Articulo } from '../../articulo.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = 'Administración de Artículos'
  codigoInput: number | undefined
  descripcionInput: string | undefined
  precioInput: number | undefined
  Selected_Article: Articulo | undefined

  articulos: Articulo[] = [
    new Articulo(6, 'papas', 10.55),
    new Articulo(2, 'manzanas', 12.1),
    new Articulo(3, 'melón', 52.3),
    new Articulo(4, 'cebollas', 17),
    new Articulo(5, 'calabaza', 20),
  ]

  agregarArticulo() {
    if (!this.codigoInput || !this.precioInput) return
    let artaux = new Articulo(
      this.codigoInput,
      this.descripcionInput,
      this.precioInput,
    )
    this.articulos.push(artaux)
  }
  borrarArticulo(id: number) {
    this.articulos = this.articulos.filter((articulo) => articulo.id !== id)
  }

  selecArticulo(id: number): void {
    this.Selected_Article = this.articulos.find((articulo) => articulo.id == id)
    this.descripcionInput = this.Selected_Article?.descripcion
    this.codigoInput = this.Selected_Article?.codigo
    this.precioInput = this.Selected_Article?.precio
  }
  modificarArticulo(id: number) {
    const index = this.articulos.findIndex((articulo) => articulo.id === id)
    if (!this.codigoInput || !this.precioInput) return
    this.articulos[index] = {
      codigo: this.codigoInput,
      descripcion: this.descripcionInput,
      precio: this.precioInput,
      id: id,
    }
  }
}
