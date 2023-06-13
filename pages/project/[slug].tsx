import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from 'next';

import { client } from "../../lib/apollo";
import { GET_PROJECT } from "../../gql";

export default function Project(props: any) {
    useEffect(()=> {
        console.log(props)
    }, [props])

    return <></>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const slug = ctx.params?.slug
    const { data } = await client.query({ 
        query: GET_PROJECT,
        variables: {
            slug
        }
    })

    console.log(data)

    return {
        props: data.project
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    }
}