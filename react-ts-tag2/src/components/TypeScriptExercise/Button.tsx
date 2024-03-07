type ColorCodes = "yellow" | "red" | "blue";

type ButtonType = {
    style: {
        backgroundColor: ColorCodes,
        color: ColorCodes,
        fontSize: string | number,
        padding?: [number, number, number?, number?]
    },
    text?: string,
    action: ()=>number
}

//interface anwendung eher selten !! FOKUS AUF TYPE 
interface Button{
    style: {
        backgroundColor: ColorCodes,
        color: ColorCodes,
        fontSize: string | number,
        padding?: [number, number, number?, number?]
    },
    text?: string,
    action: () => number
}

//alternativ: React.CSSProperties um alle möglichen CSS attr. zu verarbeiten. !!ACHTUNG!! - keine speziellen definitionen möglich w.zB. COLORCODES

const Button = ({ style, text = "Default", action }: Button) => {
    return (
        <button
            onClick={action}
            style={{
                backgroundColor: style.backgroundColor,
                color: style.color,
                fontSize: style.fontSize,
                padding: style.padding ? `${style.padding[0]}px ${style.padding[1]}px ${style.padding[2]}px ${style.padding[3]}px` : ""
            }}>
            {text}
        </button>
    )
}

export default Button
