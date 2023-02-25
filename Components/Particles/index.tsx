import { useCallback } from "react";
import TsParticles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";


export default function Particles() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return <TsParticles
        id="tsparticles"
        init={particlesInit}
        options={{
            preset: "triangles",
            background: {
                color: {
                    value: "#000",
                },
            },
            style: {
                position: "relative"
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: false
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    grab: {
                        distance: 150
                    },
                },
            },
            particles: {
                color: {
                    value: ["#ffffff", "#560CF2", "#9B0DFC", "#C900E6", "#FC0DBF", "#F20C44"],
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    //@ts-ignore
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 1500,
                    },
                    value: 100,
                },
                opacity: {
                    value: 0.8,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }} />
}