import { Component, Input, OnInit } from '@angular/core';
import * as EventEmitter from 'events';
import { AccountsService } from '../../accounts.service';
import { loggingServices } from '../../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[loggingServices]
})
export class AccountComponent implements OnInit {

  // @Input() account: {name: string, status: string};
  // @Input() id: number;
  @Input() account:any; 
  @Input() id: any;
  
  

  constructor(private loggingService: loggingServices, 
              private accoutnsService: AccountsService){}

  onSetTo(status: string) {
    this.accoutnsService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status);
    this.accoutnsService.statusUpdated.emit(status);
  }

  ngOnInit(): void {
  }

}
