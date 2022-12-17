import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import apiKey from './Components/Data/config';
import Navinshorts from './Components/NavInshorts/Navinshorts';
import NewsContent from './Components/NewsContent/NewsContent';


function App() {

  const [category, setCategory] = useState("general")
  const [newsArray, setnewsArray] = useState([])
  const [newsResults, setnewsResults] = useState()

  const NewsApi = async () => {
    try {

      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`)
      setnewsArray(news.data.articles)
      setnewsResults(news.data.totalResults)
    }

    catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    NewsApi()
    // console.log(newsArray)
  }, [newsResults,category])


  return (
    <>
      <div>
        <Navinshorts setCategory={setCategory} />
        <NewsContent />
      </div>
    </>
  );
}

export default App;
