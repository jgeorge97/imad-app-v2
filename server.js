var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pgs={
        pg1: {
        title:'Page 1 | George Jose',
        heading:'Page 1',
        date:'Mar 17 2017',
        content: `<p>Hello World.</p>
                    
                    <p>My name is George Jose</p>
                    
                    <p>I am into Coding eventhough I'm a bit lazy.</p>`
                },
    
    pg2: {
        title:'Page 2 | George Jose',
        heading:'Page 2',
        date:'Mar 17 2017',
        content: `<p>Hello World.</p>
                    
            <p>I am 19 years old and I live in Kerala</p>
            
            <p>I study Computer Science and Engineering in College of Engineering Cherthala.</p>`
        
        
    }
};

function createtemplate(data){
    
            var title=data.title;
            var date=data.date;
            var heading=data.heading;
            var content=data.content;
            var template=`<!DOCTYPE html>
            <html>
                <head>
                    <title>${title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="/ui/style.css" rel="stylesheet" />
                </head>
                <body>
                    <div>
                        <a href='/'>Home</a>
                    </div>
                    <hr/>
                    <div class="box">
                        <h4>${heading}</h4>
                        <div>${date}</div>
                        <div>
                           ${content}
                        </div>
                    </div>
                </body>
            </html>
`;
    return template;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:pgno',function (req,res){
    var pgno=req.params.pgno;
    res.send(createtemplate(pgs[pgno]));
});

    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
