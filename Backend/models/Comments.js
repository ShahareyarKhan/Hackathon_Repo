const mongoose = require('mongoose');
const {Schema}=mongoose;

const CommentSchema = new Schema({
  user:{
    type : String,
    required : true
  },
  description:{
    type : String,
    required : true
  },
  date:{
    type : Date,
    default: Date.now
  }
});
const Comments= mongoose.model('comments',CommentSchema);
module.exports=Comments;