const express = require('express')
const fs = require('fs')
const path = require('path');

const app = express()

app.get('/', (req,res)=> {
	// res.send('Here is the home page')
	res.sendFile(path.join(__dirname, 'index.html'))
})



const PORT = 3302;
app.listen(PORT, appServer)


function appServer() {
	const HOST = 'localhost';
	
	console.log(`App server running on ${HOST}:${PORT}`)
}