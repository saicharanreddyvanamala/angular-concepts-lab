import { Component, Input, TemplateRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sintel-actions-modal',
  imports: [CommonModule],
  templateUrl: './sintel-actions-modal.html',
  styleUrl: './sintel-actions-modal.scss',
})
export class SintelActionsModal implements OnInit {
  @Input() modalHeader?: TemplateRef<any>;
  @Input() modalBody?: TemplateRef<any>;
  @Input() modalFooter?: TemplateRef<any>;

  @Input() modalContext?: any;

  templateContext: any = {};

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.templateContext = {
      row: this.modalContext?.row,
      activeModal: this.activeModal
    };
  }
}
