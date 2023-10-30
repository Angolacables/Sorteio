import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicServiceService {

  constructor(private http: HttpClient,) { }
  base_url = "youapilink.example.com";

  sorteio_url= this.base_url + "/UserViewSet/"
  numeroSorteUrl = this.base_url +  "/usercount/"

  /* ---------------------- Início: Método de submeterSorteio ------------------ */

  submeterSorteio(user: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<any>(this.sorteio_url, user, {headers: headers});
  }

/* ---------------------- Fim: Método de  submeterSorteio ------------------ */

/* ---------------------- Início: Método de obterNumeroSorte ------------------ */
getParticipantes(): Observable<any> {
  var headers = new HttpHeaders();
  headers = headers.append('Content-Type', 'application/json');

  return this.http.get(this.sorteio_url,{ headers: headers})
}

/* ---------------------- Fim: Método de  obterNumeroSorte ------------------ */

/* ---------------------- Início: Método de obterNumeroVencedor ------------------ */
  getVencedor(): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.get(this.numeroSorteUrl,{ headers: headers})
  }

/* ---------------------- Fim: Método de  obterNumeroVencedor ------------------ */
}
