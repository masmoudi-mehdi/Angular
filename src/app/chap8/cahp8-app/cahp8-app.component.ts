import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-cahp8-app',
  templateUrl: './cahp8-app.component.html',
  styleUrls: ['./cahp8-app.component.css'],
  providers:[AccountsService]
})
export class Cahp8AppComponent implements OnInit {
  
  accounts : {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
  onAccountAdded(newAccount: {name: string, status: string}) {
    // this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    // this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
