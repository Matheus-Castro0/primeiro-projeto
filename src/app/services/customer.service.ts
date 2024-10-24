import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customers = [
    {id: 1, nome: 'Matheus'},
    {id: 2, nome: 'Pedro'},
    {id: 3, nome: 'Isaac'},
    {id: 4, nome: 'Samuel'}
  ];

  getCustomers() {
    return this.customers;
  }

  getById(id: number) {

    let customer = this.customers.find(c => {
      return c.id === id;
    });

    return customer;
  }
}
