interface Prop{
    name:string;
    email:string;
    friends:string[];
}
const Person = (props:Prop) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.email}</h1>
        <div>{props.friends.map((friend: string)=><h1>{friend}</h1>)}</div>
    </div>
  )
}

export default Person