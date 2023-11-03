import { Component } from '@angular/core';
import { IfElseServiceService } from '../Service/if-else-service.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

   constructor(private Service:IfElseServiceService){

   }

   ngOnInit(){
    this.getTopCardDetailds();
   }

   data: any[] = [];
     getTopCardDetailds(){
        this.Service.get_Top_Card().subscribe((res)=>{
          console.log("res",res);
          this.data= res.top_cards
          console.log(this.data);
          
        })        
     }
     
}
