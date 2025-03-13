import { Component, inject } from '@angular/core';
import { SingleFruitComponent } from './single-fruit/single-fruit.component';
import { FruitlistService } from '../shared/services/fruitlist.service';

@Component({
  selector: 'app-fruit-list',
  standalone: true,
  imports: [SingleFruitComponent],
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.scss',
})
export class FruitListComponent {
  fruitlistService = inject(FruitlistService);

  addComment(comment: string, index: number) {
    this.fruitlistService.addComment(comment, index);
  }
}
