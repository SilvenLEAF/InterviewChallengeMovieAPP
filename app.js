// modules to help developing
const chalk = require('chalk');      // chalk makes colorful console.logs only to make our development easier





if(process.env.NODE_ENV !== 'production'){
  // if we are on developemnt, load the development variables
  require('dotenv').config();
}




// core modules
const express = require('express');
const path = require('path');







// ----------------------------------FIRING EXPRESS APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, `client/build`)));







/* -----------------------------------------
.                   routes
----------------------------------------- */



// CATCH-ALL HANDLER
app.get('*', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});



// ERRORS HANDLER
app.use((err, req, res)=>{  
  
  console.log(chalk.red(err.message));
  console.log(err);

  res.json({ msg: 'Server Error!', error: err.message });
})

// ---------------------end of routes---------------------










// -----------------------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
});