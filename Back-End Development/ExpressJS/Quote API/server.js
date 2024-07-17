const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;
app.listen(PORT);
app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
  res.send({
    quote: getRandomElement(quotes)
  })
})

app.get('/api/quotes', (req, res, next) => {
  if (req.query.person !== undefined) {
    const name = req.query.person;
    const filteredQuotes = quotes.filter(quote => quote.person === name);
    console.log(filteredQuotes);
    if (filteredQuotes.length == 0) {
      res.send([]);
    }
    else {
      res.send({
        quotes: filteredQuotes
      });
    }
  }
  else {
    res.send({
        quotes: quotes
      });
  }
})

app.post('/api/quotes', (req, res, next) => {
  console.log(req.query.person)
  if (req.query.quote && req.query.person) {
    res.status(201).send({ 
      quote: {
        quote: req.query.quote,
        person: req.query.person
      }
    });
    quotes.push({
        quote: req.query.quote,
        person: req.query.person
      }
    );
  }
  else {
    res.status(400).send();
  }
})
