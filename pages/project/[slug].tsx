import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error'
import styles from "../../styles/Home.module.css";

import { client } from "../../lib/apollo";
import { GET_PROJECT } from "../../gql";

import global from "../../styles/Global.module.css";
import Image from 'next/image'
import Link from "next/link";


export default function Project(props: IProject) {
    if (props.error) {
        return <Error statusCode={props.error} />
    }

    console.log(props)

    return <div className={global.top}>
        <section className={`${styles.section}`}>
            <div className={`${global.container} ${global.aux}`}>
                <div>
                    <Image src={props.image?.url} width={900} height={500} alt={props.name} />
                </div>
                <h1>{props.name}</h1>
                { props.tags?.length && <div>
                    {props.tags.map((el, i)=> <span key={i}>{el}</span>)}
                </div>}
                {props.demo && <Link href={props.demo}>Demo</Link>}
                {props.sourceCode && <Link href={props.sourceCode}>Source Code</Link>}
                {props.description && <article>{props.description}</article>}
            </div>
        </section>
    </div>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const slug = ctx.params?.slug
    const { data } = await client.query({ 
        query: GET_PROJECT,
        variables: {
            slug
        }
    })

    console.log("data= ", data)

    return {
        props: {
            ...data.project,
            error: !data.project && 404
        }
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    }
}