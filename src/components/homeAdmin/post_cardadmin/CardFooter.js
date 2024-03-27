import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Send from '../../../images/send.svg'
import LikeButton from '../../LikeButton'
import { useSelector, useDispatch } from 'react-redux'
import { likePost, unLikePost, savePost, unSavePost } from '../../../redux/actions/postAction'
import ShareModal from '../../ShareModal'
import { BASE_URL } from '../../../utils/config'

import { useTranslation } from 'react-i18next'

const CardFooter = ({post}) => {

  const {  languagee } = useSelector(state => state)
   
     const { t } = useTranslation();
      
  
      const [isLike, setIsLike] = useState(false)
      const [loadLike, setLoadLike] = useState(false)
  
      const [isShare, setIsShare] = useState(false)
  
      const { auth, theme, socket } = useSelector(state => state)
      const dispatch = useDispatch()
  
      const [saved, setSaved] = useState(false)
      const [saveLoad, setSaveLoad] = useState(false)
  
      // Likes
      useEffect(() => {
          if(post.likes.find(like => like._id === auth.user._id)){
              setIsLike(true)
          }else{
              setIsLike(false)
          }
      }, [post.likes, auth.user._id])
  
      const handleLike = async () => {
          if(loadLike) return;
          
          setLoadLike(true)
          await dispatch(likePost({post, auth, socket}))
          setLoadLike(false)
      }
  
      const handleUnLike = async () => {
          if(loadLike) return;
  
          setLoadLike(true)
          await dispatch(unLikePost({post, auth, socket}))
          setLoadLike(false)
      }
  
  
      // Saved
      useEffect(() => {
          if(auth.user.saved.find(id => id === post._id)){
              setSaved(true)
          }else{
              setSaved(false)
          }
      },[auth.user.saved, post._id])
  
      const handleSavePost = async () => {
          if(saveLoad) return;
          
          setSaveLoad(true)
          await dispatch(savePost({post, auth}))
          setSaveLoad(false)
      }
  
      const handleUnSavePost = async () => {
          if(saveLoad) return;
  
          setSaveLoad(true)
          await dispatch(unSavePost({post, auth}))
          setSaveLoad(false)
      }
  
      return (
        <div className="card_footer" style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '20px' }}>
        <div className="card_icon_menu" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LikeButton 
              isLike={isLike}
              handleLike={handleLike}
              handleUnLike={handleUnLike}
            />
      
            <Link to={`postadmin//${post._id}`} className="text-dark" style={{ marginLeft: '10px' }}>
              <i className="far fa-comment" style={{ fontSize: '20px', color: '#3498DB', cursor: 'pointer' }} />
            </Link>
      
            <img src={Send} alt="Send" style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => setIsShare(!isShare)} />
          </div>
      
          <div>
            {
              saved 
              ?  <i className="fas fa-bookmark text-info" style={{ fontSize: '20px', color: '#27AE60', cursor: 'pointer' }} onClick={handleUnSavePost} />
              :  <i className="far fa-bookmark" style={{ fontSize: '20px', color: '#333', cursor: 'pointer' }} onClick={handleSavePost} />
            }
          </div>
        </div>
      
        <div className="d-flex justify-content-between">
          <h6 style={{ padding: '0 25px', fontSize: '14px', cursor: 'pointer', color: '#333' }}>
            {post.likes.length}   {t('likes', { lng: languagee.language })}
          </h6>
          <h6 style={{ padding: '0 25px', fontSize: '14px', cursor: 'pointer', color: '#333' }}>
            {post.comments.length}  {t('comments', { lng: languagee.language })}
          </h6>
        </div>
      
        {
          isShare && <ShareModal url={`${BASE_URL}/post/${post._id}`} theme={theme} />
        }
      </div>
      
  
      )
  }
  
  export default CardFooter
  