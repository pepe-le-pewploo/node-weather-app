const express = require('express')
const app = express()

const axios = require('axios')

require('dotenv').config()

const PORT = process.env.PORT || 3000;

const API_KEY = process.env.API_KEY;

app.use(express.json());

app.get('/', async (req,res) => {
  const {city} = req.query;
  console.log(city)
  const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  try {
    const myResponse = await axios.get(base_url);
    const data = myResponse.data.main;
    res.json({data});
  } catch (error) {
    console.log(error)
    res.json(error);
  }
})

app.listen(PORT, () => console.log(`listening on Port ${PORT}`))