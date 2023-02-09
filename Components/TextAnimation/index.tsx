import Typed from "react-typed"

export default function TextAnimation() {
    return <Typed
        strings={[
            "Front-end development",
            "Back-end development",
            "Full stack development"
        ]}
        typeSpeed={100}
        backSpeed={150}
        loop
    />
}