import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../accounts.service';
import { loggingServices } from '../../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[loggingServices]

})
export class NewAccountComponent implements OnInit {


  constructor(private loggingService: loggingServices,
              private accoutsService: AccountsService){
                this.accoutsService.statusUpdated.subscribe(
                  (status : string) => alert('New Status: ' + status)
                )
              }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accoutsService.addAccount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus);
  }
  ngOnInit(): void {
  }

}
