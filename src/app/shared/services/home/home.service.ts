import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpService: HttpServiceService) { }

  fetchFruits(): any {
    return this.httpService.get('shop/products/')
  }
}
