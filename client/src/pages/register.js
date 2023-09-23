import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'

const Register = () => {
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
       username: '', email: '', password: '', cf_password: ''
    }
    const [userData, setUserData] = useState(initialState)
    const {   username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
         console.log("handleChangeInput called", name, value);
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
       
   
    }

    return (
        <div className="auth_page">
    <form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Tassili Automobile</h3>

        

        <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input type="text" className="form-control" id="username" name="username"
            onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')}
            style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} />
            
            <small className="form-text text-danger">
                {alert.username ? alert.username : ''}
            </small>
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Adresse e-mail</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name="email"
            onChange={handleChangeInput} value={email}
            style={{background: `${alert.email ? '#fd2d6a14' : ''}`}} />
            
            <small className="form-text text-danger">
                {alert.email ? alert.email : ''}
            </small>
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Mot de passe</label>

            <div className="pass">
                
                <input type={ typePass ? "text" : "password" } 
                className="form-control" id="exampleInputPassword1"
                onChange={handleChangeInput} value={password} name="password"
                style={{background: `${alert.password ? '#fd2d6a14' : ''}`}} />

                <small onClick={() => setTypePass(!typePass)}>
                    {typePass ? 'Cacher' : 'Afficher'}
                </small>
            </div>

            <small className="form-text text-danger">
                {alert.password ? alert.password : ''}
            </small>
        </div>

        <div className="form-group">
            <label htmlFor="cf_password">Confirmez le mot de passe</label>

            <div className="pass">
                
                <input type={ typeCfPass ? "text" : "password" } 
                className="form-control" id="cf_password"
                onChange={handleChangeInput} value={cf_password} name="cf_password"
                style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}} />

                <small onClick={() => setTypeCfPass(!typeCfPass)}>
                    {typeCfPass ? 'Cacher' : 'Afficher'}
                </small>
            </div>

            <small className="form-text text-danger">
                {alert.cf_password ? alert.cf_password : ''}
            </small>
        </div>

        
        
        <button type="submit" className="btn btn-dark w-100">
            S'inscrire
        </button>

        <p className="my-2">
            Vous avez déjà un compte ? <Link to="/" style={{color: "crimson"}}>Connectez-vous maintenant</Link>
        </p>
    </form>
</div>

    )
}

export default Register
