export class Produit {
  public id?: number;
  public nom?: string;
  public prix?: number;

  constructor(id?: number, nom?: string, prix?: number) {
    this.id = id;
    this.nom = nom;
    this.prix = prix;
  }
}

export class Liste {
  id?: number;
  nom?: string;
  prix?: number;
  produits: Array<Produit> = new Array<Produit>();

  constructor(id?: number, nom?: string, prix?: number) {
    this.id = id;
    this.nom = nom;
    this.prix = prix;
  }
}
