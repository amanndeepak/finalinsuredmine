import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public codeValue: string;
  public myname:string = '';

  public typedTerm:string;

  public id:any ;



  public  codeList = [
    { name: 'Gina Williams' },
      { name: 'Jake Williams' },
        { name: 'Jamie Jhon' },
          { name: 'John Doe' },
            { name: 'Jeff stwart' },
               { name: 'Paula. M. Kelith'},
 
  ];

  public saveCode(e): void {
    let name = e.target.value;
    let list = this.codeList.filter(x => x.name === name)[0];
    
  }

 


  values() {
    if(this.myname.charAt(this.myname.length-1) == "@") {
this.id  = this.myname.charAt(this.myname.length-1) ;


    }
  }
     selectvalue(c) {
    this.myname = this.myname.replace(this.myname.charAt(this.myname.length-1),"")+ c;
    this.id = ''
       
    }


public reset()
{
this.myname ="";
}
}