import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModalComponent } from '../common-modal/common-modal.component';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  @ViewChild('childModal') childModal: CommonModalComponent;
  constructor(private viewContainerRef: ViewContainerRef) {
  }
  
  ngOnInit() {
  }

}
