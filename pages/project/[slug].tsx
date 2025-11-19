import React from "react";
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from "../../styles/Home.module.css";

import { client } from "../../lib/apollo";
import { GET_PROJECT, GET_ALL_PROJECTS_SLUGS } from "../../gql";

import global from "../../styles/Global.module.css";
import project from "../../styles/Project.module.css";
import Image from 'next/image'
import Link from "next/link";
import RichText from "../../Components/RichText";


export default function Project(props: IProject) {
    const router = useRouter()

    if (props.error) {
        return <Error statusCode={props.error} />
    }

    if (router.isFallback || !props.id) {
        return (
            <div className={global.top}>
                <section className={`${styles.section}`}>
                    <div className={`${global.container} ${project.container} ${global.aux}`}>
                        <p>Carregando...</p>
                    </div>
                </section>
            </div>
        )
    }

    const pageTitle = `${props.name} | Projeto`
    const pageDescription = props.description 
        ? props.description.substring(0, 160) + (props.description.length > 160 ? '...' : '')
        : `Confira o projeto ${props.name}`

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                {props.image?.url && <meta property="og:image" content={props.image.url} />}
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                {props.image?.url && <meta name="twitter:image" content={props.image.url} />}
            </Head>
            <div className={global.top}>
                <section className={`${styles.section}`}>
                    <div className={`${global.container} ${project.container} ${global.aux}`}>
                        <Link href="/#projetos" className={project.backButton}>
                            Voltar para projetos
                        </Link>
                        
                        {props.image?.url && (
                            <div className={project["image-container"]}>
                                <Image 
                                    className={project.image} 
                                    src={props.image.url} 
                                    width={900} 
                                    height={500} 
                                    alt={props.name}
                                    priority
                                />
                            </div>
                        )}
                        
                        <h1 className={project.title}>{props.name}</h1>
                        
                        {props.tags && props.tags.length > 0 && (
                            <div className={project.tag}>
                                {props.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>
                        )}
                        
                        {(props.demo || props.sourceCode) && (
                            <div className={project.containerLinks}>
                                {props.demo && (
                                    <a 
                                        href={props.demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={project.link}
                                    >
                                        Demo
                                    </a>
                                )}
                                {props.sourceCode && (
                                    <a 
                                        href={props.sourceCode} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={project.link}
                                    >
                                        Código Fonte
                                    </a>
                                )}
                            </div>
                        )}
                        
                        {props.description && (
                            <RichText 
                                content={props.description}
                                className={project.description}
                                as="article"
                            />
                        )}
                    </div>
                </section>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (ctx: { params?: { slug?: string } }) => {
    try {
        const slug = ctx.params?.slug as string
        
        if (!slug) {
            return {
                notFound: true
            }
        }

        const { data } = await client.query({ 
            query: GET_PROJECT,
            variables: {
                slug
            }
        })

        if (!data || !data.project) {
            return {
                notFound: true
            }
        }

        return {
            props: {
                ...data.project,
            },
            revalidate: 60 // Revalida a cada 60 segundos
        }
    } catch (error) {
        console.error('Erro ao buscar projeto:', error)
        return {
            notFound: true
        }
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data } = await client.query({ 
            query: GET_ALL_PROJECTS_SLUGS 
        })

        const paths = data?.projects?.map((project: { slug: string }) => ({
            params: { slug: project.slug }
        })) || []

        return {
            paths,
            fallback: 'blocking' // Usa 'blocking' para melhor SEO
        }
    } catch (error) {
        console.error('Erro ao buscar slugs dos projetos:', error)
        return {
            paths: [],
            fallback: 'blocking'
        }
    }
}