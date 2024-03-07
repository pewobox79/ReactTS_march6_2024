import { useState } from "react";

const Forms = () => {

    const INITVALUES = { title: "", description: "" };
    const URL = "https://jsonplaceholder.typicode.com/posts";

    const [postData, setPostData] = useState(INITVALUES);
    const [msg, setMsg] = useState(false);

    function handleChange(e: { target: { value: string, name: string } }) {
        //spread operator (...postData) baut eine shallow copy und ergänzt mit den neuen werten
        // aus dem entsprechenden input field

        setPostData({ ...postData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log("submitted values", postData)

        const config = {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        };

        fetch(URL, config)
            .then(res => {
                if(!res.ok) throw new Error("error");
                return res.json()
            })
            .then(data => {
                console.log("data", data)
                setMsg(true)
            })

        setPostData(INITVALUES)
    }

    console.log(postData)
    return (
        <div>
            <h2>Formular</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label><br />
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={postData.title}
                    placeholder="Title"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="description">Description</label><br />
                <textarea
                    id="description"
                    name="description"
                    placeholder="dein text hier..."
                    value={postData.description}
                    onChange={handleChange}
                /><br />
                <button type="submit">Submit</button>
            </form>
            {msg && <div>Artikel wurde erfolgreich versendet!</div>}

        </div>
    )
}

export default Forms
