import React from 'react'
import { useRef,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Categories } from '../Constants';
import { PostGetAction } from '../redux/actions/PostActions';
import { useLocation, useNavigate } from 'react-router-dom';
const CategoryScroll = () => {
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
    const path = useLocation();
    const navigate=useNavigate()
    const { search, location, category } = useSelector(state => state.PostsReducers)
    const categorySelect = (c) => {
      const pathname = path.pathname;
      if(pathname !== "/home"){
        navigate('/home')
      }
      if (c == category) {
        dispatch(PostGetAction(search, location, ""))
        dispatch({ type: "CATEGORY_CHANGE", payload: "" })
      } else {
        dispatch(PostGetAction(search, location, c))
        dispatch({ type: "CATEGORY_CHANGE", payload: c })
      }
  
    }
  return (
    <div className="cat2">

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
      </div>
  )
}

export default CategoryScroll