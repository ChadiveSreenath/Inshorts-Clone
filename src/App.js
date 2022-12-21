import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navinshorts from "./Components/NavInshorts/Navinshorts";
import NewsContent from "./Components/NewsContent/NewsContent";

function App() {
  const [category, setCategory] = useState(null);
  const [newsArray, setnewsArray] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const getData = async (category, page) => {
    if (!category || !page || page > 5) return;
    setLoading(true);
    let data = await fetch(
      `http://localhost:8080/${category}?_page=${page}&_limit=9`
    ).then((res) => res.json());
    setTimeout(() => {
      if (data?.length !== undefined) setLoading(false);
      setnewsArray((prev) => [...prev, ...data]);
    }, 1000);
  };

  const userAtEnd = () => {
    if (page > 5) return;
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
      console.log({ page, msg: "end" });
    }
  };

  useEffect(() => {
    setCategory("general");
    getData(category, page);
    return () => {
      setCategory(null);
    };
  }, [category, page]);

  useEffect(() => {
    window.addEventListener("scroll", userAtEnd);
    setPage((prev) => prev + 1);
    return () => {
      setPage((prev) => prev - 1);
      window.removeEventListener("scroll", userAtEnd);
    };
  }, [page]);

  return (
    <>
      <div>
        <Navinshorts setCategory={setCategory} category={category} />
        {loading && page === 1 ? (
          <div className="circular">
            <CircularProgress color="success" thickness={5} size={200} />{" "}
          </div>
        ) : (
          <NewsContent newsArray={newsArray} />
        )}
        {loading && page > 1 && (
          <div className="bottom-loader">
            <CircularProgress color="success" size={100} />{" "}
          </div>
        )}
        {page > 5 && !loading && (
          <div className="toast">You have all caught up ...!</div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
