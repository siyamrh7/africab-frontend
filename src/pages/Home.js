import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import ContainerResults from "../components/ContainerResults";
import ReadySection from "../components/ReadySection";
import "./Home.css";
import CardSection from "../components/CardSection";
import { Categories } from '../Constants'
import { useRef, useState } from "react";
import gsap from 'gsap'
import { useDispatch, useSelector } from "react-redux";
import { PostGetAction } from "../redux/actions/PostActions";
import CategoryScroll from "../components/CategoryScroll";

const Home = () => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  //Anim
  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.5 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.5 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  const dispatch = useDispatch()
  const { search, location, category } = useSelector(state => state.PostsReducers)
  const categorySelect = (c) => {
    if (c == category) {
      dispatch(PostGetAction(search, location, ""))
      dispatch({ type: "CATEGORY_CHANGE", payload: "" })
    } else {
      dispatch(PostGetAction(search, location, c))
      dispatch({ type: "CATEGORY_CHANGE", payload: c })
    }

  }
  return (
    <div className="home">
      <SearchForm />
      {/* <ContainerResults /> */}
      {/* <div className="cat2">

        {scrollX !== 0 && (
          <button
            className="prev  button-c"
            onClick={() => slide(-150)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}
          >
            <i className="fa fa-angle-left"></i>
          </button>
        )}
        <ul ref={scrl} onScroll={scrollCheck} className="categorie">
          {Categories.map((c, i) => (
            <p key={c} onClick={() => categorySelect(c)} className={c == category ? "citem citem-active" : "citem"}>{c}</p>
          ))}
        </ul>
        {!scrolEnd && (
          <button
            className="next button-c"
            onClick={() => slide(+250)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}
          >
            <i className="fa fa-angle-right"></i>
          </button>
        )}
      </div> */}
<CategoryScroll/>

      <b className="mostPopular">{category && category}</b>



      <CardSection />
    </div>
  );
};

export default Home;
