import { Component, ViewChild, NgModule, ViewContainerRef } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap';
import { CommonModalComponent } from './common-modal/common-modal.component';
import { RoleComponent } from './role/role.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('childModal') childModal: CommonModalComponent;
  constructor(private viewContainerRef: ViewContainerRef) {
  }

}

@NgModule({
  imports: [BrowserModule, ModalModule.forRoot()],
  declarations: [AppComponent, CommonModalComponent, RoleComponent, FormulaireComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }