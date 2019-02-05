import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Merge Arrays';

  private mergeResult1: any;
  private mergeResult2: any;

  private array1: number[] = [1, 7, 11, 17];
  private array2: number[] = [3, 5, 13];
  private array3: number[] = [2, 3, 5, 7, 11];
  private array4: number[] = [2, 4, 6, 8, 10, 12, 14];

  constructor() {}

  *mergeArrays(array1: number[], array2: number[]) {
    yield array1.concat(array2).sort((n1, n2) => n1 - n2);
  }

  merge(): void {
    this.mergeResult1 = this.mergeArrays(this.array1, this.array2).next().value;
    console.log(this.mergeResult1);

    this.mergeResult2 = this.mergeArrays(this.array3, this.array4).next().value;
    console.log(this.mergeResult2);
  }

}
