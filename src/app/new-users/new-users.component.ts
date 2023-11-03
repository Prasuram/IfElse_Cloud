import { Component } from '@angular/core';
import { IfElseServiceService } from '../Service/if-else-service.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent {

  constructor(private Service:IfElseServiceService){

  }

  ngOnInit(){
   this.getTopCardDetailds();
  }

  data: any[] = [];
    getTopCardDetailds(){
       this.Service.get_Top_Card().subscribe((res)=>{
         console.log("res",res);
         this.data= res.new_users
         console.log(this.data);
         
       })        
    }

}
