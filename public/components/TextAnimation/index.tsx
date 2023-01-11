import Typed from "react-typed"

export default function TextAnimation() {
    return <Typed
        strings={[
            "One",
            "Two",
            "TODOS"
        ]}
        typeSpeed={100}
        backSpeed={150}
        loop
    />
}