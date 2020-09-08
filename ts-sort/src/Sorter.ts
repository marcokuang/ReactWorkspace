export interface Sortable {
  length: number;
  compare(left: number, right: number): boolean;
  swap(left: number, right: number): void;
}

export class Sorter {
  // collection: number[];

  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }
  constructor(public collection: Sortable) {}

  private printCollection(): void {
    console.log(JSON.stringify(this.collection));
  }

  sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - 1 - i; j++) {
        if (this.collection.compare(j, j + 1)) {
          // setup a type guard
          this.collection.swap(j, j + 1);
        }
      }
    }
    this.printCollection();
  }
}
