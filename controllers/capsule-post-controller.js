var CapsulePost = require('../models/capsule-post');

module.exports = {
  index: function(req, res) {
    Capsule.find({}, function(err, records){
      if(err) {
        res.status(404).send("No records found!");
      } else {
        res.send(records);
      }
    });
  },
  show: function(req, res) {
    Capsule.findById(req.params.id, function(err, record){           
      if(err) {
        res.send(err);
      } else {
        res.send(record);
      }
    });
  },
  create: function(req, res) {
    Capsule.create(req.body, function(err, record){
      if(err) {
        res.send(err);
      }
      res.send(record);
    });
  },
  update: function(req, res) {
    Capsule.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, record){
      if(err) {
        res.send(err);
      }
      res.send(record);
    });
  },
  destroy: function(req, res) {
    Capsule.findByIdAndRemove(req.params.id, function(err, record){
      if(err) {
        res.send(err);
      }
      res.send("Capsule has been deleted!");
    });
  }
};