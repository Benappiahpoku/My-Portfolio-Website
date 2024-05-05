// Create a single page application with the following sections
import "./App.css";
import Navigation from "./Components/Navigation";
// import icon from './img/icon.png'; // adjust the path as needed


function App() {

  
  return (
    <>
      <div>
        {/* Navigation */}
        <Navigation />
        <div className="container">
          <header>{/* Hero */}</header>

          {/* Main section */}
          <main>
            {/* Portfolio */}
            <section>
              <h3> Hello World</h3>
    
            </section>
            {/* Skills Set */}
            <section>
              <h3> Hello World</h3>
            </section>
            {/* About */}
            <section>
              <h3> Hello World</h3>
            </section>
            {/* Testimonials */}
            <section>
              <h3> Hello World</h3>
            </section>
            {/* Blog */}
            <section>
              <h3> Hello World</h3>
            </section>
            {/* Contact */}
            <section>
              <h3> Hello World</h3>
            </section>
          </main>
        </div>
        <footer>
          <p> &copy; 2021</p>
        </footer>
      </div>
    </>
  );
}

export default App;
