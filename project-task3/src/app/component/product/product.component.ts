import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productlist:any;
public filtercategory:any;
searchkey:string="";   

  constructor(private apiservice:ServiceService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.apiservice.getProduct()
    .subscribe(res=>{
      this.productlist=res;

      this.filtercategory=res;

     this.productlist.forEach((a:any) => {     
      if(a.category==="women's clothing" || a.category==="men's clothing" ){
        a.category="fashion"
      }
      
      ///this is used to add the quantity and price  which api donsent having
      Object.assign(a,{quantity:1,total:a.price});
      
     });
console.log(this.productlist)
    });

    this.cartservice.search.subscribe((val:any)=>{
      this.searchkey=val;
    })
  }

addtocart(item:any){
this.cartservice.addtoCart(item);
}

filter(category:string){
this.filtercategory=this.productlist
.filter((a:any)=>{
  if(a.category==category ||category==''){
    return a;
  }
})
}


}
