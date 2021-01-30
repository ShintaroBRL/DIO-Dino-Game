var mongoose = require('mongoose');

const DBServer = process.env.DBServer || 'mongodb://usuario:senha@host/base'

mongoose.connect(DBServer);  
var Schema = mongoose.Schema;