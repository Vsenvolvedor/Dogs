import React from 'react'
import { PHOTOS_GET } from '../../Api';
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import FeedPhotosItem from './FeedPhotosItem'
import styles from  './FeedPhotos.module.css'
import { useSelector } from 'react-redux';

const FeedPhotos = ({ setModalPhoto }) => {
  const { list } = useSelector(state => state.feed);

  return (
    <ul className={`animeLeft ${styles.feed}`}>
      {list.map(photo => {
        return <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
      })}
    </ul>
  )
}

export default FeedPhotos