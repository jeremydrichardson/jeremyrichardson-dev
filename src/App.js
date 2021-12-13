import "./App.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `## What the heck!`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jeremy Richardson</h1>
        <h2>I build software solutions that users love</h2>
      </header>
      <main>
        <h3>What I'm learning</h3>
        <article>
          <h4>The First blog article heading</h4>
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </article>
      </main>
    </div>
  );
}

export default App;
