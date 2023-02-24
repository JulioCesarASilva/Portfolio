import Typed from "react-typed"

export default function TextAnimation({func}: {func: string[]}) {
    return <Typed
        strings={func}
        typeSpeed={100}
        backSpeed={150}
        loop
    />
}