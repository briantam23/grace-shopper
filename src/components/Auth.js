import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, logout } from '../store/authReducer'
import { Button } from 'reactstrap'


class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    componentDidUpdate(prevProps) {
        const { auth } = this.props;
        if(prevProps !== this.props) {
            if(auth.id) this.setState({ username: '', password: '', error: '' });
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleLogin() {
        const { login, history } = this.props;
        login(this.state, history)
            .catch(() => this.setState({ error: 'Incorrect Username and/or Password. Please try again.' })) 
    }
    render() {
        const { handleChange, handleLogin } = this;
        const { username, password, error } = this.state;
        const { auth, login, logout, history } = this.props;
        return(
            !auth.id ? (
                <Fragment>
                    <br/>
                    <div className="container">
                    <form>
                        <h2>Hey there!</h2>
                        <input onChange={ handleChange } value={ username } name='username' placeholder='Username' autoFocus className="form-control"/>
                        <input onChange={ handleChange } value={ password } name='password' placeholder='Password' className="form-control" />
                        <Button onClick={ () => handleLogin() } color='success'>Login</Button>
                    </form>
                    <br/><br/>
                {
                    error ? (
                        <Fragment>
                            <br/>
                            <div className="alert alert-danger" >{ error }</div> 
                        </Fragment>
                    ) : null
                }
                </div>
                </Fragment>
            ) : (<Fragment>
                    <br/>
                    <Button onClick={ () => logout(history) } color='danger' style={{ float: 'right' }}>Logout</Button>
                    <h3 style={{ display: 'inline-block', float: 'right' }} >Welcome { auth.name }!&emsp;</h3>
                    <br/><br/>
                </Fragment>
            )
        )
    }
}

const mapStateToProps = ({ auth }, { history }) => ({ auth, history });

const mapDispatchToProps = ({ login, logout })


export default connect(mapStateToProps, mapDispatchToProps)(Auth);