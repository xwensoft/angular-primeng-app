import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from "primeng/components/common/api";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:  [ConfirmationService]
})
export class ListComponent implements OnInit {
  name: string;
  userResponse: Message[]=[];
  theUserSaid: string;

  constructor(
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
  }

  onChangeEvent({target}){
    this.name = target.value;
}

greetMe(){

  this.confirmationService.confirm({
      message: ` Hey ${this.name}, do you like PrimeNG?`,
      header: 'Greeting',
      icon: 'fa fa-question-circle',
      accept: () => {
          this.userResponse = [];
          this.userResponse.push({severity:'info', summary:'Confirmed', 
                                detail:'I like PrimeNG'});
          this.theUserSaid = this.name + " responded " + 
                               this.userResponse[0].detail;
      },
      reject: () => {
          this.userResponse = [];
          this.userResponse.push({severity:'info', summary:'Rejected', 
                detail:'I don\'t really like PrimeNG'});
          this.theUserSaid = this.name + " responded " +
                    this.userResponse[0].detail;
      }
  });
}

}
