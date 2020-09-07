class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  private swap(left: number, right: number): void {
    const leftHand = this.collection[left];
    this.collection[left] = this.collection[right];
    this.collection[right] = leftHand;
  }

  private printCollection(): void {
    console.log(JSON.stringify(this.collection));
  }

  sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - 1 - i; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
    this.printCollection();
  }

  sort2(): void {
    let sorted = false;

    // improvement #1
    // shrink the checking array size after each sweep
    let lastSortedIndex = this.collection.length - 1;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < lastSortedIndex; i++) {
        if (this.collection[i] > this.collection[i + 1]) {
          sorted = false;
          this.swap(i, i + 1);
        }
      }
      lastSortedIndex--;
    }
    this.printCollection();
  }
}

const sorter = new Sorter([10, -2, 0, 4]);
sorter.sort2();
