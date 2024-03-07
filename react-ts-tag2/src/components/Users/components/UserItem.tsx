import { UserItemType } from "../../../types/UserTypes"

const UserItem = ({ name, email, id }: UserItemType) => {
    return (
        <div style={{ border: "1px solid black", borderRadius: "10px", marginBottom: "5px", boxShadow: "1px 1px", padding: "10px", width: "auto" }}>
            {name}
            {email}
            {id}
        </div>
    )
}

export default UserItem
