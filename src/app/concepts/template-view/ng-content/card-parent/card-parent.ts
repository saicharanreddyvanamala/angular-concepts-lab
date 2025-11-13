import { Component } from '@angular/core';
import { CardChild } from "../card-child/card-child";

@Component({
  selector: 'app-card-parent',
  imports: [CardChild],
  templateUrl: './card-parent.html',
  styleUrl: './card-parent.scss',
})
export class CardParent {

}
