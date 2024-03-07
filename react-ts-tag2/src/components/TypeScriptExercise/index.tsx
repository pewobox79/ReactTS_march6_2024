import Button from "./Button"
import Button2 from "./Button2"

const TypeScriptExercise = () => {

    function handleClick() {
        return 5
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>TS Exercise</h3>
            <Button
                action={handleClick}
                style={{
                    backgroundColor: "yellow",
                    color: "red",
                    fontSize: 30,
                    padding: [20, 30, 40, 50]
                }}


            />
            <br />
            <Button2>
                <>
                    <h1>nochmal was</h1>
                    <h1>nochmal was</h1>
                </>
            </Button2>
        </div>
    )
}

export default TypeScriptExercise
