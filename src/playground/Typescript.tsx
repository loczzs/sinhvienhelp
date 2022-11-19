//snipet: tsrafce
import {useState} from "react"
import internal from "stream";
// định nghĩa type cho các giá trị props của component
interface Props {
  message: string;
  email?: string;
  onClick?:()=>void;
}
interface User {
  firstName: string,
  lastName:string,
  age:number,
}

const Typescript = ({ message, email,onClick }: Props) => {
  // const[user,setUser] = useState<User>({firstName:"",lastName:"",age:0})
  // hoặc
  const[user,setUser] = useState<User>({} as User)
  // user.firstName
  return (
    <div>
      <h1>{message}</h1>
      {email && <h3>{email}</h3>}
      {onClick && <button onClick={onClick}>click</button>}
    </div>
  );
};

export default Typescript;
