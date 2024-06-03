import { Component } from '@angular/core';
import { Produit } from '../../model';
import { Router } from '@angular/router';
import { ProduitHttpService } from './produit-http.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css',
})
export class ProduitComponent {
  recherche: string = '';

  produitForm?: Produit;

  constructor(
    private router: Router,
    private produitHttpService: ProduitHttpService
  ) {}

  save() {
    if (this.produitForm) {
      if (this.produitForm?.id) {
        // modification
        this.produitHttpService.update(this.produitForm);
      } else {
        // création
        this.produitHttpService.create(this.produitForm);
      }
    }

    this.produitForm = undefined;
  }

  list(): Array<Produit> {
    return this.produitHttpService.findAll();
  }

  search(rech: string) {
    this.produitHttpService.loadByTitle(rech);
  }

  add() {
    this.produitForm = new Produit();
  }
}
