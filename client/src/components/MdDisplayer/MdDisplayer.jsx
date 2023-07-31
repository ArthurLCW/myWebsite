import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import network1 from '../../static/blogFiles/basics/network1.png';
import network2 from '../../static/blogFiles/basics/network2.png';
import javascript1 from '../../static/blogFiles/frontEnd/javascript1.png';

// Map images
const imageMap = {
  "network1.png": network1,
  "network2.png": network2,
  "javascript1.png": javascript1,
};

const Markdown = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter style={solarizedlight} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
        img({node, ...props}) {
          const newSrc = imageMap[props.src] || props.src;
          return <img {...props} src={newSrc} style={{maxWidth: "100%"}}/>
        }
      }}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
}

const MdDisplayer = ({fileName}) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(fileName)
      .then(response => response.text())
      .then(text => setContent(text));
  }, []);

  return (
    <div>
      <Markdown content={content} />
    </div>
  );
};

export default MdDisplayer;
