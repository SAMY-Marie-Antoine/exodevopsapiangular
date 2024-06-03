import { Injectable } from '@angular/core';
import { environment } from '../environments/environment-prod';
import { Produit } from '../../model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProduitHttpService {
  private todos: Produit[] = new Array<Produit>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<Produit[]> = this.http.get<Produit[]>(
      environment.apiUrl + '/todo'
    );

    obs.subscribe((resp) => {
      this.todos = resp;
    });
  }

  loadByTitle(title: string) {
    if (title) {
      this.http
        .get<Produit[]>(environment.apiUrl + '/todo/by-title/' + title)
        .subscribe((resp) => {
          this.todos = resp;
        });
    } else {
      this.load();
    }
  }

  findAll(): Produit[] {
    return this.todos;
  }

  findById(id?: number): Observable<Produit> {
    return this.http.get<Produit>(environment.apiUrl + '/todo/' + id);
  }

  create(todo: Produit): void {
    this.http
      .post<Produit>(environment.apiUrl + '/todo', todo)
      .subscribe((resp) => {
        this.load();
      });
  }

  update(todo: Produit): void {
    this.http
      .put<Produit>(environment.apiUrl + '/todo/' + todo.id, todo)
      .subscribe((resp) => {
        this.load();
      });
  }

  delete(id?: number): void {
    this.http
      .delete<void>(environment.apiUrl + '/todo/' + id)
      .subscribe((resp) => {
        this.load();
      });
  }
}
