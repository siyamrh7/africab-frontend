import React from 'react'
import { Categories } from '../Constants'
import styles from './cardsection.module.css'
import Pagination from './Pagination'
import SingleCard from './SingleCard'
import { useSelector } from 'react-redux'
const CardSection = () => {
  const {posts,category,latest}=useSelector(state=>state.PostsReducers)
  if(posts.length == 0) return null
  return (
    <div className={styles.sectionrecommendationsCarous}>
    
        <div className={styles.divgigListingsPackage}>
    
          {
            posts.slice(0,30).map((post)=>(

              <SingleCard post={post}/>
            ))
          }
         

        </div>
        <b className={styles.mostPopular}>Latest Posts</b>
        <div className={styles.divgigListingsPackage}>
         
        {
            latest.slice(0,10).map((post)=>(

              <SingleCard post={post}/>
            ))
          }

        </div>
        <Pagination />
      </div>
  )
}

export default CardSection