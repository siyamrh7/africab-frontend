import { useSelector } from "react-redux";
import NewsContainer from "../components/NewsContainer";
import "./NewsTextareas.css";

const NewsTextareas = () => {
  const {news}=useSelector(state=>state.NewsReducers)
  return (
    <div className="news-cards">
      <b className="latest-news">Latest News</b>
     
      <div className="flex-news-cards">
{
  news.map((newt)=>(

    <NewsContainer
      carImageUrl={newt.images}
  newt={newt}
    />
  )

  )
}
     
      </div>
    </div>
  );
};

export default NewsTextareas;
