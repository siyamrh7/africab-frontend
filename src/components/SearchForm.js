import { useDispatch, useSelector } from "react-redux";
import "./SearchForm.css";
import { PostGetAction } from "../redux/actions/PostActions";
import { useNavigate } from "react-router-dom";
const SearchForm = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const { language} = useSelector(state => state.AuthReducers)

  const {search,location,category}=useSelector(state=>state.PostsReducers)
  const onSubmit=()=>{
    dispatch(PostGetAction(search,location,category))
    navigate("/home")
  }
const onLocationChange=(e)=>{
if(e.target.value === "Nearby"){
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      dispatch({type:"LOCATION_CHANGE",payload:{ coordinates: [longitude,latitude], radius: 1 }})
    },
    error => setError(error.message)
  );
}else{
  dispatch({type:"LOCATION_CHANGE",payload:""})

}
  }
  return (
    <div className="search">
      <div className="search-inner">
        <div className="rectangle-div" />
      </div>
      <div className="frame-container">
        <div className="find-information-easily-parent">
          <b className="find-information-easily-container">
            <span>{language.find.split(" ")[0]} </span>
            <span className="information">{language.find.split(" ")[1]}</span>
            <span> {language.find.split(" ")[2]} {language.find.split(" ")[3]}</span>
          </b>
          <div className="thousands-of-information">
            {language.thousands}
          </div>
        </div>
        <div className="frame-div">
          <input
            className="frame-input"
            type="text"
            value={search}
            placeholder={language.what}
            onChange={(e)=>dispatch({type:"SEARCH_CHANGE",payload:e.target.value})}
          />
          <select onChange={onLocationChange} className="frame-child1" type="text" placeholder="Location" >
          <option value={""}>Location any</option>

          <option value="Nearby">Location nearby</option>

            </select>
          <button className="button2" onClick={onSubmit}>
            <div className="search1">{language.search}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
