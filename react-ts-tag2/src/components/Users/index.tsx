import { useEffect, useState } from "react";
import UserItem from "./components/UserItem";


const Users = () => {

    //user daten fetch

    const [users, setUsers] = useState<[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const URL = "https://jsonplaceholder.typicode.com/users";
    const controller = new AbortController();
    const signal = controller.signal;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(()=>{
            fetch(URL, {signal:signal})
                .then(res => res.json())
                .then(data => {
                    setUsers(data)
                    setIsLoading(false)
                });

                return ()=>controller.abort()
        }, 2000)
        
            
    }, [])

    console.log("userliste", users)

    const UsersList = users.map((user: { name: string, id: string, email: string}) => {
        return <UserItem key={user.id} name={user.name} email={user.email} id={user.id} />
    });

    return (
        <div>
            <h2>user overview</h2>
            {isLoading ? <div>is Loading...</div> :UsersList}
        </div>
    )
}

export default Users
