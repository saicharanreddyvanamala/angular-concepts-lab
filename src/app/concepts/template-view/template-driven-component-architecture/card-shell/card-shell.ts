import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-shell',
  imports: [CommonModule],
  templateUrl: './card-shell.html',
  styleUrl: './card-shell.scss',
})
export class CardShell {
  @Input() title = ''
  @Input() data: any;
  @Input() contentTemplate!: TemplateRef<any>;

}
