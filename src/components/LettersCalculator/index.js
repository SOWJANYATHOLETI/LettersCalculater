// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    lettersPhrase: '',
  }

  onChangeInputPhrase = event => {
    this.setState({lettersPhrase: event.target.value})
  }

  render() {
    const {lettersPhrase} = this.state

    return (
      <div className="app-container">
        <div className="component-container">
          <div className="letters-calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                placeholder="Enter the phrase"
                onChange={this.onChangeInputPhrase}
                type="text"
                id="phraseText"
                value={lettersPhrase}
              />
            </div>
            <p className="letters-count">
              No.of letters: {lettersPhrase.length}
            </p>
          </div>
          <img
            className="letters-calculator-img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
