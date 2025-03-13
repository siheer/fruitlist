import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fruit } from '../../shared/interfaces/fruit.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-fruit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './single-fruit.component.html',
  styleUrl: './single-fruit.component.scss',
})
export class SingleFruitComponent {
  @Input() fruit!: Fruit;

  @Output() commentPosted = new EventEmitter<string>();

  commentInput = '';

  sendPostedComment() {
    this.commentPosted.emit(this.commentInput);
    this.commentInput = '';
  }
}
