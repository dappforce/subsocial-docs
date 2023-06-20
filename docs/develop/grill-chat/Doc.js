import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import MDXContent from '@theme/MDXContent'
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import gfm from 'remark-gfm';
import MDXComponents from '@theme/MDXComponents'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import rehypeParse from 'rehype-parse'

const ReadmeComponent = ({ url }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Fetch the README file from the URL.
    axios.get(url)
      .then(response => {
        setMarkdown(response.data);
      })
      .catch(error => {
        console.error('Error fetching README:', error);
      });
  }, []);

  // split the string from the word details.
  const renderMarkdown = (markdown) => {
    const processor = unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, {
        createElement: React.createElement,
        Fragment,
        components: MDXComponents
      })
      .use(remarkRehype)
      .use(gfm)
      .use(remarkParse);
    return processor.processSync(markdown).result;
  };
  return renderMarkdown(markdown);
};

export default ReadmeComponent;
