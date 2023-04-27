import './index.css'

import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorText: '',
    showSubmitError: false,
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
        errorText: data.error_msg,
        showSubmitError: true,
      })
    }
  }

  render() {
    const {username, password, errorText, showSubmitError} = this.state

    return (
      <div className="login-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form-cont" onChange={this.submitForm}>
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
          {showSubmitError && <p className="error-message">{errorText}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
