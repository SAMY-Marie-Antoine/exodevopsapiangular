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
  produitForm?: Produit;

  constructor(
    private router: Router,
    private produitHttpService: ProduitHttpService
  ) {}

  save() {
    if (this.produitForm) {
      // création
      this.produitHttpService.create(this.produitForm);
    }

    this.produitForm = undefined;
  }

  list(): Array<Produit> {
    return this.produitHttpService.findAll();
  }

  add() {
    this.produitForm = new Produit();
  }
}
