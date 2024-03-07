import { useEffect, useState } from "react";
import UserItem from "./components/UserItem";


const Users = () => {

    //user daten fetch

    const [users, setUsers] = useState<[]>([])

    const URL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {

        fetch(URL)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    console.log("userliste", users)

    const UsersList = users.map((user: { name: string, id: string, email: string}) => {
        return <UserItem key={user.id} name={user.name} email={user.email} id={user.id} />
    });

    return (
        <div>
            <h2>user overview</h2>
            {UsersList}
        </div>
    )
}

export default Users
