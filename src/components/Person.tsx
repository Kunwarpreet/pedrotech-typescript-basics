interface Prop{
    name:string;
    email:string;
    friends:string[];
    country:Country;
}

export enum Country{
  Brazil='Brazil',
  USA='USA',
  France='France'
}

export const Person = (props:Prop) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.email}</h1>
        <div>{props.friends.map((friend: string)=><h1>{friend}</h1>)}</div>
        <h1>{props.country}</h1>
    </div>
  )
}

