import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';

// added for game-dev
import c from 'react-syntax-highlighter/dist/esm/languages/prism/c';
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp';
import csharp from 'react-syntax-highlighter/dist/esm/languages/prism/csharp';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import kotlin from 'react-syntax-highlighter/dist/esm/languages/prism/kotlin';

import { darkGrayTheme } from '@/Components/PageComponents/Notes/NotesRendering/Utils/Theme';
import { ReactNode } from 'react';

// Register only the languages you need
SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('shell', bash);

// new registrations
SyntaxHighlighter.registerLanguage('c', c);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('c++', cpp);   // alias for convenience
SyntaxHighlighter.registerLanguage('csharp', csharp);
SyntaxHighlighter.registerLanguage('cs', csharp); // alias for convenience
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('kotlin', kotlin);

interface CodeBlockProps {
  className?: string;
  children: ReactNode;
  copyToClipboard: (code: string) => void;
  copied: boolean;
}

const CodeBlock = ({ className, children, copyToClipboard, copied }: CodeBlockProps) => {
  const language = className?.replace('language-', '') || '';
  const codeString = typeof children === 'string' ? children.trim() : '';

  return (
    <div className="codeBlockWrapper">
      <div className="codeBlockHeader">
        <span className="codeBlockLanguage">{language.toUpperCase()}</span>
        <button className="copyCodeButton" onClick={() => copyToClipboard(codeString)}>
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
      <SyntaxHighlighter
        style={darkGrayTheme}
        language={language}
        PreTag="div"
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;