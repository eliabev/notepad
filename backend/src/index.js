const express = require('express');
require('./config/dbConfig')
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ 
        name: 'Eli Oliveira',
        jobTitle: 'Developer'
     })
});

app.listen(3712);
