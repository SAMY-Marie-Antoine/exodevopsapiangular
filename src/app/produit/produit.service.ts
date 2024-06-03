import { Injectable } from '@angular/core';
import { Produit } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private produits: Array<Produit> = new Array<Produit>();

  constructor() {
    this.produits.push(new Produit(1, 'Faire le repassage', 10));
    this.produits.push(new Produit(2, 'Passer la tondeuse', 20));
    this.produits.push(new Produit(3, 'Aspirer', 30));
  }

  findAll(): Array<Produit> {
    return this.produits;
  }

  findById(id?: number): Produit | undefined {
    return this.produits.find((t) => t.id == id);
  }

  create(todo: Produit) {
    let max = 0;
    for (let t of this.produits) {
      if (t.id && t.id > max) {
        max = t.id;
      }
    }
    todo.id = ++max;
    this.produits.push(todo);
  }

  update(todo: Produit) {
    let position = this.produits.findIndex((t) => t.id == todo.id);

    this.produits[position] = todo;
  }

  delete(id?: number) {
    let position = this.produits.findIndex((t) => t.id == id);

    // let positionAlt;
    // for(let i=0;i<this.todos.length;i++) {
    //   if(this.todos[i] == id) {
    //     positionAlt = i;
    //     break;
    //   }
    // }

    this.produits.splice(position, 1); // argument 1 (position): début de la suppression - argument 2 (1) : nombre d'éléments à supprimer
  }
}
