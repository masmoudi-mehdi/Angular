
  // onAddServer() {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }


export class ServerModel{
    public type: string;
    public name: string;
    public content: string;
    constructor (type: string, name: string, content: string ){
        this.type = type;
        this.name = name;
        this.content = content;

    }
}


