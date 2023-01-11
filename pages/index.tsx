import Head from 'next/head'
import Header from '../public/components/Header'
import Particles from '../public/components/Particles'
import TextAnimation from '../public/components/TextAnimation'
import styles from '../styles/Home.module.css'

export default function Home() {
  const colors = ["#FC0DBF", "#FFF", "#C900E6", "#9B0DFC", "#560CF2"]
  return (
    <>
      <Head>
        <title>Julio Cesar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
            :root {
              --color-default: ${colors[Math.floor(Math.random() * 5)]};
            } 
          `}</style>
      </Head>
      <Header />
      <main>
        <section className={styles.particles}>
          <Particles />
          <div className={styles.info}>
            <h1>Julio Cesar</h1>
            <p>
              I&apos;m
              <TextAnimation />
            </p>

          </div>
        </section>
        <section>
          OLA Mundo
        </section>
      </main>
    </>
  )
}
