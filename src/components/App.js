import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <ArticleList/>
      <Article/>
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
    </div>
  );
}

export default App;
