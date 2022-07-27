const { getCleanedString } = require('../helpers/helpers')

module.exports = {
  reverseText: (req, res) => {
    const {
      text
    } = req.query

    if (!text) {
      return res.status(400).send({
        error: 'no text'
      })
    }

    const isPalindrome = getCleanedString(text) === getCleanedString(text).split('').reverse().join('')

    const reversedText = text.split('').reverse().join('')

    const response = {
      text: isPalindrome ? text : reversedText,
      palindrome: isPalindrome
    }

    return res.send(response)
  },

  noEndpointReached: (_req, res) => {
    return res.status(404).send({
      error: 'no endpoint reached'
    })
  }
}
