import React from 'react'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'
import { useSelector } from 'react-redux'

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const commentsSection = React.useRef(null)
  const { data } = useSelector(state => state.user);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ?styles.single : ''}`}>
        {comments.map(comment => {
        return( 
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}:</strong>
            <span>{comment.comment_content}</span>
          </li>)
        })}
      </ul>
      {data && <PhotoCommentsForm id={props.id} setComments={setComments} single={props.single}/>}
    </>
  )
}

export default PhotoComments