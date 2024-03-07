type Button2Type={
    children: React.ReactElement[] | React.ReactElement 
}

//React.ReactElement => nur ein Element erlaubt !!muss ein <tag> sein!!

//React.ReactNode => kann alles sein

const Button2 = ({children}:Button2Type) => {
    return (
        <button>{children}</button>
    )
}

export default Button2
