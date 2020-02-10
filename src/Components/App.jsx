import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteData from "../Notes";

console.log(NoteData);

function App() {
  return (
    <div>
      <Header />
      {NoteData.map(props => (
        <Note key={props.key} title={props.title} content={props.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
