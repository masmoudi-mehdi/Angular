import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../server.module';


@Component({
  selector: 'app-binding-app',
  templateUrl: './binding-app.component.html',
  styleUrls: ['./binding-app.component.css']
})
export class BindingAppComponent  {

  serverElements : ServerModel[] = [{type : 'server', name: 'testserver', content:' just a test!'}];

  onServerAdded(serverData : {serverName: string, serverContent: string}){
      this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  
  onBlueprintAdded(blueprintData : {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'changed!';
  }


  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }
}
