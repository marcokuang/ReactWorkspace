import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const myArr = new NumbersCollection([-5, -13, 10, -9]);
const myStr = new CharactersCollection("zOuAb");
const sorter = new Sorter(myStr);

sorter.sort();
