import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.scss',
})
export class PersonalInfo {
 @Input() group!: FormGroup;
}
