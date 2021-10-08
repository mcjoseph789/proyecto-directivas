export class Articulo {
  static lastId = 0
  id: number
  constructor(
    public codigo: number,
    public descripcion: string | undefined,
    public precio: number,
  ) {
    this.id = ++Articulo.lastId
  }
}
