import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-info',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address-info.html',
  styleUrl: './address-info.scss',
})
export class AddressInfo {
 @Input() group!: FormGroup;
}
