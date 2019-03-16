var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI, { useMongoClient: true });
var db = mongoose.connection;

db.on('error', function() {
  console.log('Database connection error');
});

db.once('open', function() {
  console.log('Database connected successfully');
});

var assetSchema = mongoose.Schema({
  quantity: Number,
  description: String,
  logo: String,
  price: Number
});

var Asset = mongoose.model('Asset', assetSchema);

var selectAll = function(callback) {
  Asset.find({}, function(err, assets) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, assets);
    }
  });
};

module.exports.selectAll = selectAll;