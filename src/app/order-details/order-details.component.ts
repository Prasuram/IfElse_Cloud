import { Component } from '@angular/core';
import { IfElseServiceService } from '../Service/if-else-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {

  constructor(private Service:IfElseServiceService){

  }

  ngOnInit(){
   this.getTopCardDetailds();
  }

  data: any[] = [];
    getTopCardDetailds(){
       this.Service.get_Top_Card().subscribe((res)=>{
         console.log("res",res);
         this.data= res.recent_orders
         console.log(this.data);
         
       })        
    }
    

    getBackgroundColor(status: string): string {
      switch (status) {
        case 'Paid':
          return 'yellow'; 
        case 'Failed':
          return 'lightblue'; 
        case 'Pending':
          return 'lightgreen'; 
        default:
          return 'white'; 
      }
    }

}
