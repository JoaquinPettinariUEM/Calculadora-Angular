import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  display = '';
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  onAdd() {
    if (this.display.at(-1) === '+') {
      return;
    }
    if (!this.display.length) {
      this.display = '0+';
      return;
    }
    this.display += '+';
  }

  onTotal() {
    const numbersSplitted = this.display.split('+').map(Number);
    const total = numbersSplitted.reduce((partialSum, acc) => partialSum + acc, 0);
    this.display = String(total);
  }

  onNumberClick(num: number) {
    this.display += num;
  }

  onRemoveLastOne() {
    if (this.display.length) {
      this.display = this.display.slice(0, -1);
    }
  }

  onRestart() {
    this.display = '';
  }
}
