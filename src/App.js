import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import apiKey from './Components/Data/config';
import Footer from './Components/Footer/Footer';
import Navinshorts from './Components/NavInshorts/Navinshorts';
import NewsContent from './Components/NewsContent/NewsContent';


function App() {

  const [category, setCategory] = useState("general")
  const [newsArray, setnewsArray] = useState([])
  const [newsResults, setnewsResults] = useState()
  const [loadmore, setLoadmore] = useState(20)


  const NewsApi = async () => {

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    try {
      const news = await axios.get(`https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`)
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
    // eslint-disable-next-line
}, [newsResults, category, loadmore])


  return (
    <>
      <div>
        <Navinshorts setCategory={setCategory} />
        <NewsContent newsArray={newsArray} newsResults={newsResults} loadmore={loadmore} setLoadmore={setLoadmore} />
        <Footer />
      </div>
    </>
  );
}

export default App;
