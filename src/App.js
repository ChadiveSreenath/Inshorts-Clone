import './App.css';
import Footer from './Components/Footer/Footer';
import NewsCard from './Components/NewsCard/NewsCard';
import NewsContent from './Components/NewsContent/NewsContent';

function App() {
  return (
    <>
    <center className="App">
      Inshorts Application
    </center>
    <NewsCard />
    <NewsContent />
    <Footer />
    </>
  );
}

export default App;
