import { useParams } from "react-router-dom";

const DynamicPage = () => {
    const params = useParams();
    console.log("params", params)

    return (
        <div>
            <h1>Dynamic page</h1>
        </div>
    )
}

export default DynamicPage
