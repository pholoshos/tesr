const JabDB = require('jabulane-db');

const apiKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDlkYWI2ZjM5NjI3YzAwMjg1MzdlMjMiLCJpYXQiOjE2OTI2MTI3MTQsImV4cCI6MTcyNDE3MDMxNH0.M_8BU3-Etq6SPH79asslRvEbgo9U8b7vGp_ih9qBxU8';

const db = new JabDB('http://localhost:3000/jabdb', apiKey);

const dbCollections = db.getAllCollections('mydb').then((collections) => {    
    console.log(collections);
}).catch((err) => {
    console.log(err);
} )