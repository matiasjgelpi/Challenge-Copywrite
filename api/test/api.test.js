const {
  expect
} = require('chai')
const {
  response
} = require('express')
const supertest = require('supertest')
const {
  app,
  server
} = require('../index')

const api = supertest(app)

describe('API tests', () => {
  it('Must return a json', async () => {
    await api
      .get('/iecho?text=hello')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  it('Must returna a reversed text', async () => {
    const response = await api.get('/iecho?text=hello')
    expect(response.body.text).to.equal('olleh')
  })

  it('Must say that the text is a palindrome', async () => {
    const response = await api.get('/iecho?text=hello')
    expect(response.body.palindrome).to.equal(false)

    const response2 = await api.get('/iecho?text=Dábale arroz a la zorra el abad')
    expect(response2.body.palindrome).to.equal(true)
  })

  it('Must return a 404 error when no reached endpoint and response a json with the message: "no endpoint reached"', async () => {
    await api
      .get('/')
      .expect(404)
      .expect('Content-Type', /application\/json/)

    const response = await api.get('/')
    expect(response.body.error).to.equal('no endpoint reached')
  })

  it('Must return a "no text" message when the query is empty', async () => {
    await api
      .get('/iecho?text')
      .expect(400)
      .expect('Content-Type', /application\/json/)

    const response = await api.get('/iecho?text')
    expect(response.body.error).to.equal('no text')
  })
})

after(() => {
  server.close()
})
