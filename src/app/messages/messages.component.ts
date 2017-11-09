import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages :any[];
  constructor() {
    this.messages =[{fromuserid:'1000',fromusername:'Mohan',message:'First Message'},{fromuserid:'6850',fromusername:'6850',message:'Second Message'},{fromuserid:'6870',fromusername:'6870',message:'Third Message'}];
   }

  ngOnInit() {
  }

  public LoadMore()
  {
    this.messages.push({fromuserid:'2000',fromusername:'4003',message:'Module consists of related components'});
    this.messages.push({fromuserid:'4014',fromusername:'4014',message:'component consists of related components'});
  }
}
