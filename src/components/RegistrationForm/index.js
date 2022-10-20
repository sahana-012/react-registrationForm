// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameError: false,
    isLastNameError: false,
    isSubmitted: false,
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmitted: true})
    } else {
      this.setState({
        isFirstNameError: !isValidFirstName,
        isLastNameError: !isValidLastName,
        isSubmitted: false,
      })
    }
  }

  logFirstNameError = () => {
    // const {isFirstNameError} = this.state
    const isValidFirstName = this.validateFirstName()
    this.setState({isFirstNameError: !isValidFirstName})
    // const className = isFirstNameError ? 'input-element error-field' : ''
  }

  logLastNameError = () => {
    // const {isLastNameError} = this.state
    const isValidLastName = this.validateLastName()
    this.setState({isLastNameError: !isValidLastName})
    // const className = isLastNameError ? 'input-element error-field' : ''
  }

  onFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  resubmitForm = () => {
    this.setState({isSubmitted: false, firstName: '', lastName: ''})
  }

  renderFormElement = () => {
    const {firstName, lastName, isFirstNameError, isLastNameError} = this.state

    const className1 = isFirstNameError
      ? 'name-input-field  error-field'
      : 'name-input-field'
    const className2 = isLastNameError
      ? 'name-input-field  error-field'
      : 'name-input-field'

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label className="label-element" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          placeholder="First name"
          className={className1}
          value={firstName}
          id="firstName"
          onBlur={this.logFirstNameError}
          onChange={this.onFirstNameChange}
        />
        {isFirstNameError && <p className="error-message">Required</p>}
        <label className="label-element" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          placeholder="Last name"
          className={className2}
          value={lastName}
          id="lastName"
          onBlur={this.logLastNameError}
          onChange={this.onLastNameChange}
        />
        {isLastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessElement = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success-image"
        alt="success"
      />
      <p className="success-message">Submitted Successfully</p>
      <button className="button" type="button" onClick={this.resubmitForm}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {!isSubmitted ? this.renderFormElement() : this.renderSuccessElement()}
      </div>
    )
  }
}

export default RegistrationForm
