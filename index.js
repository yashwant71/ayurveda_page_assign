const express=require('express');
const app =express();
const params = {}


app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.status(200).render(__dirname + '/index.html', params)
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});