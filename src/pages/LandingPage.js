import styles from "./LandingPage.module.css";
import ReadySection from "../components/ReadySection"
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "../components/SingleCard";
import { Link, useNavigate } from "react-router-dom";
import { PostGetAction } from "../redux/actions/PostActions";
import CategoryScroll from "../components/CategoryScroll";
const LandingPage = () => {
  const { latest } = useSelector(state => state.PostsReducers)
  const { user ,language} = useSelector(state => state.AuthReducers)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const categoryHandler = (e) => {
    dispatch({ type: "CATEGORY_CHANGE", payload: e })
    dispatch({ type: "SEARCH_CHANGE", payload: "" })
    dispatch(PostGetAction("", "", e))
    navigate('/home')

  }
  return (
    <div className={styles.landingpage}>
      <SearchForm />
      <CategoryScroll />
      <div className={styles.divcolumns}>
        <div className={styles.mainmaincolumn759360815}>
          <div className={styles.sectionmodulewrapper41294638}>
            <div className={styles.divcontainer876699565}>
              <div className={styles.h2popularAutoHome}>
                <div className={styles.popularCategories}>
                  {language.popular} {language.categories}
                </div>
                <div className={styles.browseAllIn}>{language.browse}</div>
              </div>
            </div>
            <div className={styles.divcardoutercontainer3243090}>
              <div className={styles.divcontainer1842299859}>
                <div className={styles.divcontainer4202182046}>
                  <img
                    className={styles.kijijiAutosEnf732c1bawebpIcon}
                    alt=""
                    src="/kijijiautosenf732c1bawebp@2x.png"
                  />
                  <div className={styles.spancardtitle78706504} onClick={() => categoryHandler("Restaurants & Bar")}>
                    <b
                      className={styles.resturantsBars}
                    >{`Restaurants & Bars`}</b>
                  </div>
                </div>
                <div className={styles.divcontainer4202182046}>
                  <img
                    className={styles.kijijiAutosEnf732c1bawebpIcon}
                    alt=""
                    src="/carse83b5592webp@2x.png"
                  />
                  <div className={styles.spancardtitle78706504} onClick={() => categoryHandler("Consultation & Services")}>
                    <b
                      className={styles.resturantsBars}
                    >{`Consultation & Services`}</b>
                  </div>
                </div>
                <div className={styles.divcontainer4202182046}>
                  <img
                    className={styles.kijijiAutosEnf732c1bawebpIcon}
                    alt=""
                    src="/classiccarsba397828webp@2x.png"
                  />
                  <div className={styles.spancardtitle78706504} onClick={() => categoryHandler("Buy & Sell")}>
                    <b
                      className={styles.resturantsBars}
                    >{`Buy & Sell`}</b>
                  </div>
                </div>
                <div className={styles.divcontainer4202182046}>
                  <img
                    className={styles.kijijiAutosEnf732c1bawebpIcon}
                    alt=""
                    src="/rvs32d39187webp@2x.png"
                  />
                  <div className={styles.spancardtitle78706504} onClick={() => categoryHandler("Jobs")}>
                    <b
                      className={styles.resturantsBars}
                    >{`Variety of Jobs`}</b>
                  </div>
                </div>
                <div className={styles.divcontainer4202182046}>
                  <img
                    className={styles.kijijiAutosEnf732c1bawebpIcon}
                    alt=""
                    src="/boats527789bawebp@2x.png"
                  />
                  <div className={styles.spancardtitle78706504} onClick={() => categoryHandler("Sports")}>
                    <b
                      className={styles.resturantsBars}
                    >{`Sports & Updates`}</b>
                  </div>
                </div>


                <div className={styles.divcontainer4202182046}>
                  <img
                    className={styles.kijijiAutosEnf732c1bawebpIcon}
                    alt=""
                    src="/motorcycles6c1e577fwebp@2x.png" />
                  <div className={styles.spancardtitle78706504} onClick={() => categoryHandler("Goverment Info’s")}>
                    <b
                      className={styles.resturantsBars}
                    >{`Goverment Info’s`}</b>
                  </div>
                </div>

                <div className={styles.divcontainer4202182046}>
                  <img
                    className={styles.kijijiAutosEnf732c1bawebpIcon}
                    alt=""
                    src="/autoparts2afd3e29webp@2x.png" />
                  <div className={styles.spancardtitle78706504} onClick={() => categoryHandler("Friendship Network")}>
                    <b
                      className={styles.resturantsBars}
                    >{`Friendship`}</b>
                  </div>
                </div>
                <div className={styles.divcontainer4202182046}>
                  <img
                    className={styles.kijijiAutosEnf732c1bawebpIcon}
                    alt=""
                    src="/heavyequipment07c8a105webp@2x.png" />
                  <div className={styles.spancardtitle78706504} onClick={() => categoryHandler("Transportations")}>
                    <b
                      className={styles.resturantsBars}
                    >{`Transportations`}</b>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className={styles.sectionmodulewrapper412946381}>
            <div className={styles.latestNewsFrom}>
              {language.latestnews}
            </div>
            <div className={styles.divcardslidercontainer213527}>
              <div className={styles.divcardslider2106513545}>
                <div className={styles.alink39703922897}>
                  <div className={styles.divcontainer42021820468}>
                    <img
                      className={styles.kijijiCentralSaveMoneyFromIcon}
                      alt=""
                      src="/kijijicentralsavemoneyfromhomeef18d7a7webp@2x.png"
                    />
                  </div>
                  <div className={styles.divtext1812711456}>
                    <div className={styles.h3h2d28d97f5}>
                      <b className={styles.howToMake}>
                        How to make and save money from home
                      </b>
                    </div>
                  </div>
                  <img
                    className={styles.svgicon459822882}
                    alt=""
                    src="/svgicon459822882.svg"
                  />
                </div>
                <div className={styles.alink39703922898}>
                  <div className={styles.divcontainer42021820468}>
                    <img
                      className={styles.kijijiCentralSaveMoneyFromIcon}
                      alt=""
                      src="/kijijicentralfindperfectapartment2b441881webp@2x.png"
                    />
                  </div>
                  <div className={styles.divtext1812711456}>
                    <div className={styles.h3h2d786d3adc}>
                      <b className={styles.howToFind}>
                        How to find the perfect apartment for rent on Kijiji
                      </b>
                    </div>
                  </div>
                  <img
                    className={styles.svgicon459822882}
                    alt=""
                    src="/svgicon4598228821.svg"
                  />
                </div>
                <div className={styles.alink39703922899}>
                  <div className={styles.divcontainer42021820468}>
                    <img
                      className={styles.kijijiCentralSaveMoneyFromIcon}
                      alt=""
                      src="/kijijicentral8essentialtoolsb395337ewebp@2x.png"
                    />
                  </div>
                  <div className={styles.divtext1812711456}>
                    <div className={styles.h3h2dA0369346}>
                      <b className={styles.essentialToolsTo}>
                        8 essential tools to have on hand for jobs around your
                        home
                      </b>
                    </div>
                  </div>
                  <img
                    className={styles.svgicon459822882}
                    alt=""
                    src="/svgicon4598228822.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          {!user ? (

          <div className={styles.sectionmodulewrapper412946382}>
            <b className={styles.africabNetworkIs}>
              Africab Network is better when you’re a member
            </b>
            <div className={styles.seeMoreRelevant}>
            {language.seemore}

            </div>
            <div className={styles.alink397039228910}>
              <Link to={'/signin'} className={styles.signIn}>Sign In</Link>
            </div>
          </div>
          ) : (
            <div className={styles.sectionmodulewrapper412946382}>
            <b className={styles.africabNetworkIs}>
              Thanks for choosing us !
            </b>
            <div className={styles.seeMoreRelevant}>
            {language.seemore}

            </div>
            <div className={styles.alink397039228910}>
              <Link to={'/home'}  className={styles.signIn}>See More</Link>
            </div>
          </div>
          )}
        </div>
        <div className={styles.asidesidebar759360815}>
          <div className={styles.moreOption}>
            <form className={styles.frameParent}>
              <div className={styles.emailMeUpdateWrapper}>
                <b className={styles.emailMeUpdate}>📨 Email me update</b>
              </div>
              <div className={styles.emailMeUpdateWrapper}>
                <div className={styles.utEsseEiusmod}>
                  Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat
                  commodo ea foes.
                </div>
              </div>
              <div className={styles.frameGroup}>
                <input
                  className={styles.frameChild}
                  type="text"
                  placeholder="name@mail.com"
                />
                <button className={styles.button2}>
                  <div className={styles.subcribe}>{language.subscribe}</div>
                </button>
              </div>
            </form>
            <div className={styles.frameParent}>
              <div className={styles.emailMeUpdateWrapper}>
                <b className={styles.startASearch}>🚀 Didn’t find what?</b>
              </div>
              <div className={styles.quisEiusmodDeseruntCillumLWrapper}>
                <div className={styles.quisEiusmodDeserunt}>
                  Quis eiusmod deserunt cillum laboris magna cupidatat esse
                  labore irure quis cupidatat in.
                </div>
              </div>
              <Link to={"/community"} style={{textDecoration:"none"}} className={styles.button3}>
                <div className={styles.subcribe}>Ask our {language.community}</div>
              </Link>
            </div>
          </div>
          <div className={styles.sectionmodulewrapper412946383}>
            <div className={styles.popularOnAfricab}>{language.popular} on Africab</div>
            <div className={styles.alink397039228911}>
              <b className={styles.newsletter1}>{language.newsletter}</b>
              <img
                className={styles.svgicon4598228823}
                alt=""
                src="/svgicon4598228823.svg"
              />
            </div>
            <div className={styles.alink397039228912}>
              <b className={styles.community1}>{language.community}</b>
              <img
                className={styles.svgicon4598228823}
                alt=""
                src="/svgicon4598228824.svg"
              />
            </div>
            <div className={styles.alink397039228913}>
              <b className={styles.informations}>Informations</b>
              <img
                className={styles.svgicon4598228823}
                alt=""
                src="/svgicon4598228825.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionrecommendationsCarous}>
        <b className={styles.mostPopular}>{language.latestPost}</b>
        <div className={styles.divgigListingsPackage}>
          {
            latest.slice(0, 12).map((post) => (

              <SingleCard post={post} />
            ))
          }


        </div>
      </div>

    </div>
  );
};

export default LandingPage;
