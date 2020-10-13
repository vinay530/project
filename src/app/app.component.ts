import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  handleIncrease = () => {
    if (this.count != 20) {
      this.count = this.count + 1;
    }
  }

  handledecrease = () => {
    if (this.count != 0) {
      this.count = this.count - 1;
    }
  }

  handelReset = () => {
    this.count = 0;
  }
}
