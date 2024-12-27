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
        <footer>
          <p>Copyright &copy; by Lapiz Jusoh, 2024-2024</p>
        </footer>
      </div>
    </div>
  )
}

export default App
