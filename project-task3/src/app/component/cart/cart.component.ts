import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products:any=[]
public grantTotal:number=0;

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.products=res;
      this.grantTotal=this.cartservice.getTotalprice();
    })
  }
  removeItem(item:any){
    this.cartservice.removeCartItem(item);
  }
emptycart(){
  this.cartservice.removeAllcart();
}
}
