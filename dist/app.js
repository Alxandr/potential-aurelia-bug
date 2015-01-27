import { HttpClient } from 'aurelia-http-client';
import { Router } from 'aurelia-router';

export class App {
  static inject () {  return [HttpClient, Router];  }
  
  constructor (httpClient, router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['welcome'], moduleId: 'admin/welcome', nav: true, title:'Welcome' },
        { route: [''], moduleId: 'test', nav: true, title:'Test' }
      ]); 
    });
    this.httpClient = httpClient;
    this.test = 'Hello, world!'; 
  }
}