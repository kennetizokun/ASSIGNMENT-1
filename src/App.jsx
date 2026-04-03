import React, { Suspense } from "react";

import { BookList, Header } from "./components/index";

const ContactCard = React.lazy(() => import("./components/ContactCard"));

const App = () => (
  
    
      <div className="container">
        <Suspense fallback= {<div>loading...</div>}>
        
          <ContactCard
            name="Sunita Kumar"
            job="Electrical Engineer"
            email="sunita.kumar@acme.co"
          />
          </Suspense>
        

        <Header />
        
        <BookList />
        
      </div>
    
  );


export default App;
