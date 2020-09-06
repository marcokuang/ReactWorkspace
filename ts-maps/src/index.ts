import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

console.log("Hello! ", new Company());
let myMap = new CustomMap("map");
let user = new User();
let company = new Company();
myMap.addMarker(user);
myMap.addMarker(company);
