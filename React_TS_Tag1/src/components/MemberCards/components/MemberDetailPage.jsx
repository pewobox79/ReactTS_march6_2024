//componente bauen
//mögliche parameter empfangen
// ausgabe name, age, description
import { useParams } from "react-router-dom"
import { members } from "../../../store/members"
const MemberDetailPage = () => {

    const params = useParams();
    const { id } = params;

    const selectedMember = members.find(item => item.id === id)

    return <div>
        <h1>MemberDetail</h1>
        <h4>{selectedMember.name}</h4>
        <h5>{selectedMember.age}</h5>
        <p>{selectedMember.description}</p>
    </div>
}

export default MemberDetailPage