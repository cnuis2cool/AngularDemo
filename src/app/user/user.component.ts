import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ngOnInit() {
  }

  private DcUsers;
  
    constructor()
    {
      this.DcUsers = [{userId:'1000',userName:"MMDC",groups:[{groupName:'PS'},{groupName:'GPS'},{groupName:'HSI'},{groupName:'JS'}]}];
      this.DcUsers.push({userId:'1506',userName:'Mohan',groups:[{groupName:'PS'},{groupName:'GPS'},{groupName:'HSI'},{groupName:'JS'}]});
      this.DcUsers.push({userId:'1683',userName:'Anil',groups:[{groupName:'PS'},{groupName:'GPS'},{groupName:'HSI'},{groupName:'JS'}]});
      this.DcUsers.push({userId:'1583',userName:'Koti',groups:[{groupName:'PS'},{groupName:'GPS'},{groupName:'HSI'},{groupName:'JS'}]});
      this.DcUsers.push({userId:'985',userName:'Srinivas',groups:[{groupName:'PS'},{groupName:'GPS'},{groupName:'HSI'},{groupName:'JS'}]});
    }
  
    public Message(user,userId)
    {
      console.log(user,userId);
    }
    private length :number;
    
    public pageEvent(event)
    {
      length =event.pageSize;
      for( var n=0;n<length;n++)
        {
          console.log(n);
          this.DcUsers.push({userId:n,userName:'Mohan'});
        }
    }
}
