import { Sortable } from "./Sorter";

export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}

  compare(leftIndex: number, rightIndex: number): boolean {
    if (this.data[leftIndex] > this.data[rightIndex]) {
      return true;
    } else {
      return false;
    }
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }

  get length(): number {
    return this.data.length;
  }
}
