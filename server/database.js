const mongoose = require('mongoose');

const URI = "mongodb://localhost/elufla";

mongoose.connect(URI)
  .then( db => {
    console.log("Conected with DB");
  })
  .catch( err => {
    console.error(err);
  });

module.exports = mongoose;
