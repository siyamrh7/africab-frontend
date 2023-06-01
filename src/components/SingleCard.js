import React from 'react'
import styles from './cardsection.module.css'
import ImageSlider from './ImagesSlider';
import { useNavigate } from 'react-router-dom';
import { SinglePostAction } from '../redux/actions/PostActions';
import { useDispatch } from 'react-redux';

const SingleCard = ({ post }) => {
  function getFirstLetters(str) {
    const firstLetters = str
      .split(' ')
      .map(word => word.charAt(0))
      .join('');

    return firstLetters;
  }
  var getFileExtension = (state) => {
    return state.split('.').pop();
  }
  const isImage = ['gif', 'jpg', 'jpeg', 'png', 'webp', 'webm',]; //you can add more
  const isVideo = ['mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'mp4', 'mkv', 'mov']
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const viewDetails=()=>{
    dispatch(SinglePostAction(post._id))
   navigate('/details/'+ post._id)
  }
  if (!post) return null
  return (
    <div className={styles.divgigWrapperImpressions}>
      <div className={styles.ah2d96da6046}>
        <div className={styles.iWillDo} onClick={viewDetails}>
          {post.name}
        </div>
      </div>
      <ImageSlider media={post.images} />
      {/* <div className={styles.amedia}>
        <div className={styles.divslides}>

          {isImage?.includes(getFileExtension(post.images[0].path)) && <img className={styles.c67298314b195f3284014acpngIcon}
            src={`${process.env.REACT_APP_BACKEND_URL}${post.images[0].path}`} />}
          {isVideo?.includes(getFileExtension(post.images[0].path)) && <video className={styles.c67298314b195f3284014acpngIcon}
            controls src={`${process.env.REACT_APP_BACKEND_URL}${post.images[0].path}`} />}

        </div>
      </div> */}
      <div className={styles.divinnerWrapper}>
        <div className={styles.divsellerName}>
          <b className={styles.jafferAppcoder}>{post.author}</b>
        </div>
        <div className={styles.spansellerImage}>
          <div className={styles.figureimghrps}>
            <b className={styles.j}>{getFirstLetters(post.author)}</b>
            {/* <img
            className={styles.jpeg20230211134223185146602Icon}
            alt=""
            src="../iiconuser--swap1.svg"
          /> */}
          </div>
        </div>
      </div>
      <div className={styles.footerh2d283dbc02}>
        <div className={styles.divcollectPackage}>
          <img
            className={styles.svgh2dFe3d8ba4Icon}
            alt=""
            src="/svgh2dfe3d8ba4.svg"
          />
        </div>
        <div className={styles.aprice}>
          <b className={styles.startingAt}>Starting at</b>
          <div className={styles.div}>${post.price}</div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard