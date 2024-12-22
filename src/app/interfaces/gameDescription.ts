//here we can define the types of variables of gameDescription using a Interface (this is a feature of typescript lenguage)
export interface gameDescription {
  data: Array<description>;
  //Array<description> it´s mean an array where each element is an object of interfaces called description.
}
interface description{
  id:number,
  name:string,
  genre:string,
  year:number,
  image:string
}
