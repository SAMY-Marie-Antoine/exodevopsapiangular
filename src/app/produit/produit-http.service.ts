import { Injectable } from '@angular/core';
import { environment } from '../environments/environment-prod';
import { Produit } from '../../model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProduitHttpService {
  private produits: Produit[] = new Array<Produit>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<Produit[]> = this.http.get<Produit[]>(
      environment.apiUrl + '/produit'
    );

    obs.subscribe((resp) => {
      this.produits = resp;
    });
  }

  findAll(): Produit[] {
    return this.produits;
  }

  create(produit: Produit): void {
    this.http
      .post<Produit>(environment.apiUrl + '/produit', produit)
      .subscribe((resp) => {
        this.load();
      });
  }
}
