var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var articles={
    "article-one": {
        title: "Article-One",
        heading:"Article-One",
        content:"<p>This is my first article</p>",
        date:"15 Feb, 2018"
    },
    "article-two":{
        title: "Article-two",
        heading:"Article-two",
        content:"<p>This is my second article</p>",
        date:"18 Feb, 2018"
    },
    "article-three":{
        title: "Article-three",
        heading:"Article-three",
        content:"<p>This is my third article</p>",
        date:"19 Feb, 2018"
    }
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate= `
    <html>
        <head>
            <title>${title} | Chirag Mittal</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <a href="/">Home</a>
                <h3>${heading}</h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`
    return htmlTemplate;
}
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
	res.send(createTemplate(articles[articleName]));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
