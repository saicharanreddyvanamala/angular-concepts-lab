import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills-section',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
 @Input() skills!: FormArray<FormControl<string>>;

  constructor(private fb: FormBuilder) {}

  add() {
    this.skills.push(this.fb.nonNullable.control(''));
  }

  remove(i: number) {
    this.skills.removeAt(i);
  }
}
