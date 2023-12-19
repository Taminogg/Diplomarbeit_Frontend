import { Injectable, inject, signal } from '@angular/core';
import { CsinquiriesService, CsinquiryDto, OrderDto, OrdersService } from './swagger';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  orderService = inject(OrdersService);
  csinquiryService = inject(CsinquiriesService);
  allOrders = signal<OrderDto[]>([]);
  allAbNumbers = signal<number[]>([]);
  allArticleIds = signal<number[]>([]);
  articleNumbersForOrder = new Map<number, string>;

  constructor() {
    console.log("GETTING ORDERS");
    this.orderService.ordersGetAllOrdersGet()
      .subscribe(x => {
        this.allOrders.set(x);
        this.allOrders().forEach(currOrder => {
          this.allAbNumbers().push(currOrder.id);
          this.csinquiryService.csinquiriesGetCsinquiryWithIdGetCsinquiryWithIdIdGet(currOrder.csid)
          .subscribe(x => this.articleNumbersForOrder.set(currOrder.id, x.articleNumber));
        });
        console.log(this.allAbNumbers());
      });
  }

  refreshPage(){
    this.orderService.ordersGetAllOrdersGet()
      .subscribe(x => {
        this.allOrders.set(x);
        this.allOrders().forEach(currOrder => {
          this.allAbNumbers().push(currOrder.id);
        });
        console.log(this.allAbNumbers());
      });
  }
}
