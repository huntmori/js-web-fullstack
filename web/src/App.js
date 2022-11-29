import './App.css';
import {React, Component} from "react";

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.subject}
            </header>
        );
    }
}

class TableOfContent extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <a href="1.html">HTML</a>
                    </li>
                    <li>
                        <a href="1.html">CSS</a>
                    </li>
                    <li>
                        <a href="1.html">JavaScript</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

class Article extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.content}
            </article>
        );
    }
}

class App extends Component {
  render() {
    return (
        <div className="App">
            <Subject title="WEB" subject="WorldWideWeb!!"></Subject>
            <TableOfContent></TableOfContent>
            <Article
                title="Bloodywood"
                content="metal bend from india"
            ></Article>
            <Subject title="Melodic Speed Metal" subject="kind of subgenre of metal"></Subject>
        </div>
    );
  }
}

export default App;
