import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navinshorts from './Components/NavInshorts/Navinshorts';
import NewsContent from './Components/NewsContent/NewsContent';
import NewsData from "../src/Components/Data/data.json"

function App() {

  const [category, setCategory] = useState("general")
  const [newsArray, setnewsArray] = useState([])

  useEffect(() => {
    setnewsArray(NewsData[category])
}, [newsArray, category])

  return (
    <>
      <div>
        <Navinshorts setCategory={setCategory} />
        <NewsContent newsArray={newsArray}   />
        <Footer />
      </div>
    </>
  );
}

export default App;
