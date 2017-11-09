import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-out-put',
  templateUrl: './input-out-put.component.html',
  styleUrls: ['./input-out-put.component.css']
})
export class InputOutPutComponent implements OnInit {

  @Input()
   name :string='MOhan'; 
  constructor() { 
    console.log(this.name);
  }
  ngOnInit() {
  }
  Test()
  {
    console.log(this.name);
    this.name="test clicked";
  }
}
