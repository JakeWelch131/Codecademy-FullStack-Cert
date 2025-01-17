// test/routes/index-test.js
const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');

const app = require('../../app');

const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = jsdom(htmlAsString).querySelector(selector);
    if (selectedElement !== null) {
      return selectedElement.textContent;
    } else {
      throw new Error(`No element with selector ${selector} found in HTML string`);
    }
};

describe('in /', () => {
  describe('POST', () => {
    it('creates a new quote', async () => {
      const quote = "deez nuts";
      const attributed = "Welvin the great";
      const source = "vine";
      
      const response = await request(app)
        .post('/')
        .type('form')
        .send({quote, attributed, source});

      assert.equal(response.status, 200);

      assert.include(parseTextFromHTML(response.text, '#quotes'), quote);

      assert.include(parseTextFromHTML(response.text, '#quotes'), attributed);

      assert.include(parseTextFromHTML(response.text, '#quotes'), source);
    })
  })
})
