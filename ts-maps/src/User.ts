import faker from "faker";
import { Mappable } from "./Mappable";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `User Name: ${this.name}`;
  }
}

// export const USER_STRING = "USER";
