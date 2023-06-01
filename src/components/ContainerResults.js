import NotionContainer from "./NotionContainer";
import "./Container3177Results.css";
import { useState } from "react";
import { Categories } from "../Constants"
import { Link } from "react-router-dom";

const ContainerResults = () => {
  const [locationFilter, setLocationFilter] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState("All Categories")
  const [expandCategory, setExpandCategory] = useState(false)

  const selectLocationFilter = (arg) => {
    setLocationFilter(arg)
  }
  const categoryFilterChange = (e) => {
    setCategoryFilter(e.target.value)
    console.log(categoryFilter)
  }
  const expandCategoryHandler = () => {
    setExpandCategory(!expandCategory)
  }
  return (
    <div className="content1">
      <div className="filter-parent">
        <div className="filter">
          <div className="filters-parent">
            <b className="filters">Filters</b>
            <div className="location-group">
              <div className="category">Location</div>
              <div className="frame-parent6">
                <button onClick={() => selectLocationFilter(false)} className={locationFilter ? "nearest-wrapper" : "nearest-wrapper selectedLocationFilterWrapper"}  >
                  <div className="nearest">Nearest</div>
                </button>
                <button onClick={() => selectLocationFilter(true)} className={!locationFilter ? "any-wrapper" : "any-wrapper selectedLocationFilterWrapper"} >
                  <div className="any">Any</div>
                </button>
              </div>
            </div>
            <div className="category-wrapper">
              <div className="category">Category</div>
            </div>
            <div className="frame-parent7">
              <div className="group-container">
                <input
                  className="group-input"
                  type="radio"
                  value="All Categories"
                  name="category"
                  id="All Categories"
                  defaultChecked
                  onChange={categoryFilterChange}
                />
                <div className="radio-title">All Categories</div>
              </div>
              {Categories.map((category) => (
                <div className="group-container" key={category}>
                  <input
                    className="group-input"
                    type="radio"
                    value={category}
                    name="category"
                    id={category}

                    onChange={categoryFilterChange}
                  />
                  <div className="radio-title">{category}</div>
                </div>
              ))}


            </div>
            <div className="location-group">
              <div className="category">Date of posting</div>
              <div className="group-container">
                <input
                  className="group-input"
                  type="radio"
                  value="All time"
                  name="date"
                  id="All time"
                  defaultChecked
                  onChange={categoryFilterChange}
                />
                <div className="radio-title frame-parent7">All time</div>
              </div>
              <div className="group-container">
                <input
                  className="group-input"
                  type="radio"
                  value="Last 24 hours"
                  name="date"
                  id="Last 24 hours"
                  onChange={categoryFilterChange}
                />
                <div className="radio-title frame-parent7">Last 24 hours</div>
              </div>
              <div className="group-container">
                <input
                  className="group-input"
                  type="radio"
                  value="Last 7 days"
                  name="date"
                  id="Last 7 days"
                  onChange={categoryFilterChange}
                />
                <div className="radio-title frame-parent7">Last 7 days</div>
              </div>
              <div className="group-container">
                <input
                  className="group-input"
                  type="radio"
                  value="Last month"
                  name="date"
                  id="Last month"
                  onChange={categoryFilterChange}
                />
                <div className="radio-title frame-parent7">Last month</div>
              </div>
            </div>

          </div>
        </div>
        <div className="cards">
          <div className="frame-parent10">
            <div className="results-parent">
              <b className="restaurants-and-bar">3177 Results</b>
              <div className="mobile-filter-btn-con">
                <select className="high-to-low-parent">
                  <option value="HtL">High to Low</option>
                  <option value="LtH">Low to High</option>
                </select>
                <img
                  onClick={expandCategoryHandler}
                  className="mobile-filter-btn"
                  alt=""
                  src="https://icons.veryicon.com/png/o/miscellaneous/alicloud-official-website/filter-32.png"
                />
                <p className="filter-text">Filter</p>

              </div>
            </div>
            <div className={expandCategory ? "mobile-group-expand" : "mobile-group"}>
              <div className="mobile-categories-con">

                <div className="category-wrapper">
                  <div className="category" style={{ marginBottom: "10px" }}>Category</div>
                </div>
                <div className="frame-parent7">
                  <div className="group-container">
                    <input
                      className="group-input"
                      type="radio"
                      value="All Categories"
                      name="category"
                      id="All Categories"
                      defaultChecked
                      onChange={categoryFilterChange}
                    />
                    <div className="radio-title">All Categories</div>
                  </div>
                  {Categories.map((category) => (
                    <div className="group-container" key={category}>
                      <input
                        className="group-input"
                        type="radio"
                        value={category}
                        name="category"
                        id={category}

                        onChange={categoryFilterChange}
                      />
                      <div className="radio-title">{category}</div>
                    </div>
                  ))}


                </div>

              </div>
              <div className="mobile-others-con">

                <div className="location-group">
                  <div className="category">Date of posting</div>
                  <div className="group-container">
                    <input
                      className="group-input"
                      type="radio"
                      value="All time"
                      name="date"
                      id="All time"
                      defaultChecked
                      onChange={categoryFilterChange}
                    />
                    <div className="radio-title frame-parent7">All time</div>
                  </div>
                  <div className="group-container">
                    <input
                      className="group-input"
                      type="radio"
                      value="Last 24 hours"
                      name="date"
                      id="Last 24 hours"
                      onChange={categoryFilterChange}
                    />
                    <div className="radio-title frame-parent7">Last 24 hours</div>
                  </div>
                  <div className="group-container">
                    <input
                      className="group-input"
                      type="radio"
                      value="Last 7 days"
                      name="date"
                      id="Last 7 days"
                      onChange={categoryFilterChange}
                    />
                    <div className="radio-title frame-parent7">Last 7 days</div>
                  </div>
                  <div className="group-container">
                    <input
                      className="group-input"
                      type="radio"
                      value="Last month"
                      name="date"
                      id="Last month"
                      onChange={categoryFilterChange}
                    />
                    <div className="radio-title frame-parent7">Last month</div>
                  </div>
                  <div className="category">Price & Cost</div>

                  <select className="high-to-low-parent mobile-h-t-p">
                  <option value="HtL">High to Low</option>
                  <option value="LtH">Low to High</option>
                </select>
                </div>
              </div>
            </div>
            <NotionContainer
              companyLogoUrl="../frame-171@2x.png"
              companyName="Notion"
              jobTitle="Junior UI Designer"
              location1="Madrid"
              salaryRange="32k"
              postingDate="1 day ago"
            />
            <NotionContainer
              companyLogoUrl="../frame-172@2x.png"
              companyName="Spline studio"
              jobTitle="Technical Support Engineer"
              location1="United States"
              salaryRange="52k"
              postingDate="1 day ago"
            />
            <NotionContainer
              companyLogoUrl="../frame-173@2x.png"
              companyName="Raycast corp"
              jobTitle="Product Designer"
              location1="London"
              salaryRange="42k"
              postingDate="2 day ago"
            />
            <NotionContainer
              companyLogoUrl="../frame-174@2x.png"
              companyName="Loom"
              jobTitle="Copywriter (Growth)"
              location1="London"
              salaryRange="40k"
              postingDate="3 day ago"
            />
            <NotionContainer
              companyLogoUrl="../frame-175@2x.png"
              companyName="Trainline group"
              jobTitle="Senior UX/UI Designer"
              location1="Paris"
              salaryRange="40k"
              postingDate="4 day ago"
            />
          </div>
          <div className="pagination">
            <div className="button3">
              <img
                className="chevron-down-icon"
                alt=""
                src="../chevron-down.svg"
              />
            </div>
            <div className="button4">
              <b className="restaurants-and-bar">1</b>
            </div>
            <div className="button3">
              <div className="restaurants-and-bar">2</div>
            </div>
            <div className="button3">
              <div className="restaurants-and-bar">3</div>
            </div>
            <div className="button3">
              <div className="restaurants-and-bar">4</div>
            </div>
            <div className="button3">
              <div className="restaurants-and-bar">5</div>
            </div>
            <div className="button3">
              <img
                className="chevron-down-icon"
                alt=""
                src="../chevron-down1.svg"
              />
            </div>
          </div>
        </div>
        <div className="more-option">
          <form className="frame-form">
            <div className="category-wrapper">
              <b className="email-me-update">📨 Email me update</b>
            </div>
            <div className="category-wrapper">
              <div className="ut-esse-eiusmod">
                Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat
                commodo ea foes.
              </div>
            </div>
            <div className="frame-parent16">
              <input
                className="frame-child29"
                type="text"
                placeholder="name@mail.com"
              />
              <button className="button10">
                <div className="subcribe">Subcribe</div>
              </button>
            </div>
          </form>
          <div className="frame-form">
            <div className="category-wrapper">
              <b className="restaurants-and-bar">🚀 Didn’t find what?</b>
            </div>
            <div className="quis-eiusmod-deserunt-cillum-l-wrapper">
              <div className="quis-eiusmod-deserunt">
                Quis eiusmod deserunt cillum laboris magna cupidatat esse labore
                irure quis cupidatat in.
              </div>
            </div>
            <Link className="button11" to={"/community"}>
              <div className="subcribe">Ask our community</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerResults;
