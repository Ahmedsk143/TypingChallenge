import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  genText = lorem.sentence();
  inputText = '';
  onRefresh() {
    this.genText = lorem.sentence();
  }
  onInput(input: string) {
    this.inputText = input;
  }
  getColor(char: string, index: number) {
    if (!this.inputText[index]) {
      return 'pending';
    }
    return this.inputText[index] === char ? 'correct' : 'incorrect';
  }
}
