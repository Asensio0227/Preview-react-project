import React from 'react';
import Navbar from './Navbar';
import Preview from './Preview';


const App = () => {

  return (
    <>
      <Navbar />
      <main>
        <section className="container">
          <div className="title">
            <h2>Preview</h2>
            <div className="underline"></div>
          </div>
          <Preview/>
        </section>
      </main>
    </>
  )
}

export default App
