import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Accounts } from '../view-models/accounts';
@Injectable({
  providedIn: 'root'
})
export class AccountsService {
httpServ;
  constructor(private httpClient:HttpClient) { 
    this.httpServ={
      header:new HttpHeaders({
        'content-type':'application/json'
      })
    }
  }

  getAccounts(){
    return this.httpClient.get<Accounts>(`${environment.APIURL}/admin-panel/settings/account-types`)
  }
}
