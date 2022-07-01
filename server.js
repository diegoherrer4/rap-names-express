const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
'21 savage': {

    'age': 29,
    'birthName': 'Sheya Bin Abraham-Joseph',
    'birthLocation': 'London, England'
},

'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Benet',
    'birthLocation': 'Chicago, Illinois'
},

'dylan': {
    'age': 'dylan',
    'birthName': 'Dylan',
    'birthLocation': 'Dylan'
}

}






app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
//the colon(;) is not part of the path, it lets express know that whatever is next is a query parameter.
app.get('/api/:rapperName', (req,res)=>{
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])

    } else {
        res.json(rappers['dylan'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})