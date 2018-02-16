import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TestGridService } from './testgrid.service';
import { ITestGrid } from './testgrid';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'seng.component.html'
})
export class SengComponent implements OnInit {
  private testgrid: ITestGrid = {
  	id: 0,
  	name: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private testgridservice: TestGridService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }



}