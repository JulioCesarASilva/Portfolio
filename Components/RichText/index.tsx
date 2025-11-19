import React from 'react';
import ReactMarkdown from 'react-markdown';

interface RichTextProps {
    content: string;
    className?: string;
    as?: 'div' | 'article' | 'section';
}

export default function RichText({ content, className = '', as: Component = 'div' }: RichTextProps) {
    if (!content) return null;

    // Detecta se é HTML (contém tags HTML válidas)
    const htmlTagPattern = /<[a-z][\s\S]*?>/i;
    const commonHtmlTags = ['<p', '<div', '<h1', '<h2', '<h3', '<h4', '<ul', '<ol', '<li', '<strong', '<em', '<a ', '<br', '<span', '<img'];
    const isHTML = htmlTagPattern.test(content) && 
                   commonHtmlTags.some(tag => content.includes(tag));
    
    // Detecta se é Markdown (contém sintaxe markdown)
    const markdownPatterns = [
        /^#{1,6}\s/m,           // Headers
        /\*\*.*?\*\*/,          // Bold
        /\*.*?\*/,              // Italic
        /\[.*?\]\(.*?\)/,       // Links
        /^[\-\*\+]\s/m,         // Listas
        /^\d+\.\s/m,            // Listas numeradas
        /`[^`]+`/,              // Code inline
        /```[\s\S]*?```/,       // Code blocks
    ];
    const isMarkdown = markdownPatterns.some(pattern => pattern.test(content));
    
    const renderContent = () => {
        if (isHTML) {
            // Renderiza HTML usando dangerouslySetInnerHTML
            return (
                <div 
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            );
        } else if (isMarkdown) {
            // Renderiza Markdown usando react-markdown
            return (
                <ReactMarkdown
                    components={{
                        p: ({ node, ...props }) => <p {...props} />,
                        h1: ({ node, ...props }) => <h1 style={{ fontSize: '2rem', marginTop: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }} {...props} />,
                        h2: ({ node, ...props }) => <h2 style={{ fontSize: '1.75rem', marginTop: '1.25rem', marginBottom: '0.875rem', fontWeight: 'bold' }} {...props} />,
                        h3: ({ node, ...props }) => <h3 style={{ fontSize: '1.5rem', marginTop: '1rem', marginBottom: '0.75rem', fontWeight: 'bold' }} {...props} />,
                        h4: ({ node, ...props }) => <h4 style={{ fontSize: '1.25rem', marginTop: '0.875rem', marginBottom: '0.625rem', fontWeight: 'bold' }} {...props} />,
                        ul: ({ node, ...props }) => <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }} {...props} />,
                        ol: ({ node, ...props }) => <ol style={{ marginLeft: '1.5rem', marginBottom: '1rem' }} {...props} />,
                        li: ({ node, ...props }) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
                        strong: ({ node, ...props }) => <strong style={{ fontWeight: 'bold' }} {...props} />,
                        em: ({ node, ...props }) => <em style={{ fontStyle: 'italic' }} {...props} />,
                        code: ({ node, inline, ...props }: any) => (
                            <code 
                                style={{ 
                                    backgroundColor: 'rgba(0,0,0,0.05)', 
                                    padding: inline ? '0.2em 0.4em' : '1em',
                                    borderRadius: '4px',
                                    fontFamily: 'monospace',
                                    display: inline ? 'inline' : 'block',
                                    marginBottom: inline ? 0 : '1rem'
                                }} 
                                {...props} 
                            />
                        ),
                        a: ({ node, ...props }) => (
                            <a 
                                style={{ color: 'var(--color-default)', textDecoration: 'underline' }}
                                {...props} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                            />
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            );
        } else {
            // Texto simples - divide por quebras de linha
            return (
                <>
                    {content.split('\n').map((paragraph, i) => (
                        <p key={i}>{paragraph || '\u00A0'}</p>
                    ))}
                </>
            );
        }
    };

    return (
        <Component className={className}>
            {renderContent()}
        </Component>
    );
}

