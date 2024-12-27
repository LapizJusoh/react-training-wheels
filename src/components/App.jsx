import './App.css';
import Navbar from "./Navbar.jsx";
import MainArticle from "./MainArticle.jsx";
import NewsletterForm from "./NewsletterForm.jsx";

function App() {

  return (
    <div className="container">
      <div>
        <Navbar />
        <MainArticle />
        <NewsletterForm />
      </div>
    </div>
  )
}

export default App
