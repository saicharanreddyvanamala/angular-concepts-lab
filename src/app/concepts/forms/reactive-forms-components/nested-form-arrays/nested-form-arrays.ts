import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nested-form-arrays',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nested-form-arrays.html',
  styleUrl: './nested-form-arrays.scss',
})
export class NestedFormArrays {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      addresses: this.fb.array([
        this.createAddressGroup()
      ])
    })
  }

  // CREATE ADDRESS GROUP
  createAddressGroup(){
    return this.fb.group({
      street: this.fb.control(''),
      city: this.fb.control(''),
      phones: this.fb.array([

      ])
    })
  }

  // CREATE PHONE GROUP
  createPhoneGroup() {
    return this.fb.group({
      type: this.fb.control(''),
      number: this.fb.control('')
    });
  }

  // Getters
  get addresses() {
    return this.form.get('addresses') as FormArray;
  }

  getPhones(i: number) {
    return this.addresses.at(i).get('phones') as FormArray;
  }

  // ADD & REMOVE ADDRESS
  addAddress() {
    this.addresses.push(this.createAddressGroup())
  }

  removeAddress(i: number) {
    this.addresses.removeAt(i);
  }

  // ADD & REMOVE PHONE
  addPhone(addressIndex: number) {
    return this.getPhones(addressIndex).push(this.createPhoneGroup())
  }

  removePhone(addressIndex: number, phoneIndex: number) {
    this.getPhones(addressIndex).removeAt(phoneIndex);
  }
}
