import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navinshorts from './Components/NavInshorts/Navinshorts';
import NewsContent from './Components/NewsContent/NewsContent';

function App() {

  const [category, setCategory] = useState("general")
  const [newsArray, setnewsArray] = useState([])

  const getData = async () => {
    let data = await fetch(`http://localhost:8080/${category}`).then(res => res.json())
    setnewsArray(data)
  }

  useEffect(() => {
    getData()
  }, [category])

  return (
    <>
      <div>
        <Navinshorts setCategory={setCategory} category={category} />
        <NewsContent newsArray={newsArray} />
        <Footer />
      </div>
    </>
  );
}

export default App;
