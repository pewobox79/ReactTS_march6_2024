import { members } from '../../store/members';
import MemberCardItem from './components/MemberCardItem';

const MemberCards = () => {

    console.log("memberData", members)
    //MemberCards imports member data

    const MembersList = members.map((member) => {
        return <MemberCardItem
            key={member.id}
            id={member.id}
            name={member.name}
            age={member.age} 
            />
    })

    return (<>
        {MembersList}
    </>
    )
}

export default MemberCards





