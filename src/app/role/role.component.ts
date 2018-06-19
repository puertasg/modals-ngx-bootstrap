import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModalComponent } from '../common-modal/common-modal.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  @ViewChild('childModal') childModal: CommonModalComponent;
  constructor(private viewContainerRef: ViewContainerRef) {
  }
  
  ngOnInit() {
  }

}
