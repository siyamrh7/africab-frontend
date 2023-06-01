import Header from "../components/Header";
import QuoraBlogContainer from "../components/QuoraBlogContainer";
import FeedStoryContainer from "../components/FeedStoryContainer";
import "./Community.css";
import CommunityModal from "../components/CommunityModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionGetAction } from "../redux/actions/CommunityActions";

const Community = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { questions } = useSelector(state => state.CommunityReducers)
  const [search,setSearch]=useState("")
  const dispatch = useDispatch()
  function openModal() {
    setIsOpen(!modalIsOpen);
  }
  const [answer,setAns]=useState(null)
  useEffect(() => {
    dispatch(QuestionGetAction(search))
  }, [search])
  return (
    <div className="community">
      <div className="card-parent">
        <div className="card">
          <div className="card-content">
            <div className="opt-sectionheader">
              <div className="content">
                <div className="opt-badge">
                  <img
                    className="magnifyingglass-icon"
                    alt=""
                    src="../magnifyingglass.svg"
                  />
                </div>
                <div className="var-text-content">
                  <input className="section-title community-search"
                    placeholder=" Search your question in our community..."
                    onChange={(e)=>setSearch(e.target.value)}
                  />
                  <div className="opt-section-subtitle">Section Subtitle</div>
                </div>
                <img
                  className="opt-overflow-icon"
                  alt=""
                  src="../opt-overflow.svg"
                />
              </div>
              <div className="seperator">
                <div className="line" />
              </div>
            </div>
            {/* <div className="card-inner">
              <div className="space-list">
                <QuoraBlogContainer
                  quoraBlogImageUrl="../content@2x.png"
                  quoraBlogDescription="The Quora Blog"
                  quoraBlogFollowers="54.4K followers"
                  romeHistoryImageUrl="The place for official announcements and other major news from the Quora team"
                />
                <QuoraBlogContainer
                  quoraBlogImageUrl="../content1@2x.png"
                  quoraBlogDescription="The History of Rome"
                  quoraBlogFollowers="138.9K followers"
                  romeHistoryImageUrl="A Space dedicated to the history of Rome, from Kingdom to the fall of the Empire"
                />
                <QuoraBlogContainer
                  quoraBlogImageUrl="../content2@2x.png"
                  quoraBlogDescription="Machine Learning - Safe Artificial Intelligence"
                  quoraBlogFollowers="38K followers"
                  romeHistoryImageUrl="Clever questions, answers, post on machine learning and artifical intelligence"
                />
              </div>
            </div> */}
          </div>
          <div className="gutter" />
        </div>
        {
          questions.map((que) => (
            <FeedStoryContainer
              key={que._id}
              question={que}
              contentImageUrl="../content3.svg"
              contentImageUrls="../content4.svg"
              contentImageUrls5to10="../content5.svg"
              contentImageUrls6to11="../content6.svg"
              contentImageUrls7to12="../content7.svg"
              optImageUrl="../image1@2x.png"
              optIconUrl="../opt-icon.svg"
              optChevronSuffixUrl="../opt-var-chevron-suffix.svg"
              optChevronSuffixUrls="../opt-var-chevron-suffix1.svg"
              optChevronSuffixUrls2to6="../opt-var-chevron-suffix2.svg"
              optChevronSuffixUrls3to7="../opt-var-chevron-suffix3.svg"
              propAlignSelf="stretch"
              propHeight="382.85px"
              setAns={setAns}
            />
          ))
        }
       
        <div className="ask-button">
          <button className="glow-on-hover" onClick={openModal}>
            Ask Questions
          </button>
        </div>
      </div>
      <CommunityModal openModal={openModal} answer={answer} setAns={setAns} setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
    </div>
  );
};

export default Community;
