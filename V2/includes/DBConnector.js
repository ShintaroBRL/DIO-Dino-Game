const mongoose = require('mongoose');

const DBServer = process.env.DBServer || '<sua DB aqui>'

mongoose.connect(DBServer);  
var Schema = mongoose.Schema;
