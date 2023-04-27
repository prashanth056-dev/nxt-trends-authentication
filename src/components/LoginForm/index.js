import './index.css'

import {Link} from 'react-router-dom'

import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorText: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    console.log('prevent')
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({
        username: '',
        password: '',
        errorText: "*Username and Password didn't match",
      })
    }
  }

  render() {
    const {username, password, errorText} = this.state

    return (
      <Link to="/login" className="link">
        <div className="login-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <form className="form-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo-image"
            />
            <div className="input-cont">
              <label htmlFor="username">USERNAME</label>
              <br />
              <input
                type="text"
                value={username}
                placeholder="Username"
                id="username"
                className="input"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-cont">
              <label htmlFor="password">PASSWORD</label>
              <br />
              <input
                type="password"
                value={password}
                placeholder="Password"
                id="password"
                className="input"
                onChange={this.onChangePassword}
              />
            </div>
            <button
              className="btn button"
              type="submit"
              onClick={this.submitForm}
            >
              Login
            </button>
            <p>{errorText}</p>
          </form>
        </div>
      </Link>
    )
  }
}
export default LoginForm
