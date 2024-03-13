import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {userInput: '', wordsList: []}

  onUserInputChange = event => {
    this.setState({userInput: event.target.value})
  }

  onAddToList = event => {
    event.preventDefault()
    const {userInput} = this.state
    const charactersCount = userInput.length
    const wordObj = {
      id: uuidv4(),
      string: userInput,
      count: charactersCount,
    }

    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, wordObj],
      userInput: '',
    }))
  }

  render() {
    const {wordsList, userInput} = this.state

    return (
      <div className="app-container">
        <div className="output-container">
          <h1 className="output-heading">
            Count the characters like a Boss...
          </h1>
          {wordsList.length === 0 ? (
            <div className="no-words-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-words-img-styles"
              />
            </div>
          ) : (
            <ul className="words-list-container">
              {wordsList.map(eachObj => (
                <li key={eachObj.id} className="list-item">
                  <p>
                    {eachObj.string}: {eachObj.count}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="input-container">
          <h1 className="input-heading">Character Counter</h1>
          <form className="user-input-container" onSubmit={this.onAddToList}>
            <input
              type="text"
              value={userInput}
              placeholder="Enter the Characters here"
              onChange={this.onUserInputChange}
              className="input-styles"
            />
            <button type="submit" className="button-styles">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
