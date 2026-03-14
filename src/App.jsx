import React from "react";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <div className="container">
        <ContactCard
          name="Sunita Kumar"
          job="Electrical Engineer"
          email="sunita.kumar@acme.co"
        />

        <Header />
        <BookList />
      </div>
    </>
  );
}

export default App;