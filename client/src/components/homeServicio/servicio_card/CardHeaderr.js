import React from 'react'
 
import {  useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
 
import { GLOBALTYPES } from '../../../redux/actions/globalTypes'
 
import { BASE_URL } from '../../../utils/config'
 
import { aprovarServicioPendiente, deleteServicioPendiente } from '../../../redux/actions/servicioaproveAction'
  import { useTranslation } from 'react-i18next'

const CardHeaderr = ({ servicio  }) => {
   
    const {  languagee,auth,socket  } = useSelector(state => state)
     
       const { t } = useTranslation();
   
       
   
    
    const dispatch = useDispatch()

    const history = useHistory()
    const handleAprove = () => {
       
      
        // Mostrar la ventana de confirmación personalizada
        const confirmAction = window.confirm("¿Deseas aprobar esta agencias?")
        if (confirmAction) {
          dispatch(aprovarServicioPendiente(servicio, 'aprovado', auth));
          return history.push("/administracion/serviciospendientes");
        }
      };
      
      
 
    const handleDeleteServicio = () => {
        if (window.confirm("Voulez-vous vraiment supprimer ce service?")) {
            dispatch(deleteServicioPendiente({ servicio, auth ,socket }))
            return history.push("/")
        }
    }

  
   

const handleEditServicio = () => {
        dispatch({ type: GLOBALTYPES.STATUSSERVICIO, payload: { ...servicio, onEdit: true } })
    }

 
    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${BASE_URL}/servicio/${servicio._id}`)
    }

    return (
        <div className="card_header">
       

       <div className="nav-item dropdown ml-auto">  
        <span className="material-icons" id="moreLink" data-toggle="dropdown">
            more_horiz
        </span>

        <div className="dropdown-menu">
    {auth.user && ( // Verifica si auth.user está definido
        (auth.user._id === servicio.user._id || auth.user.role === 'admin') && (
            <>   
                <div className="dropdown-item" onClick={handleAprove}>
                    <span className="material-icons">create</span> {t('Aprove automobile', { lng: languagee.language })} 
                </div>
                <div className="dropdown-item" onClick={handleDeleteServicio} >
                    <span className="material-icons">delete_outline</span>{t('Remove automobile', { lng: languagee.language })}  
                </div>
                <div className="dropdown-item" onClick={handleEditServicio}>
                    <span className="material-icons">create</span>{t('Edit automobile', { lng: languagee.language })}  
                </div>   
            </>
        )
    )}
    <div className="dropdown-item" onClick={handleCopyLink}>
        <span className="material-icons">content_copy</span>{t('Denunciar', { lng: languagee.language })}  
    </div>
    <div className="dropdown-item" onClick={handleCopyLink}>
        <span className="material-icons">content_copy</span> {t('Copy Link', { lng: languagee.language })} 
    </div>
</div>




            </div>
 

        </div>
    )
}

export default CardHeaderr
