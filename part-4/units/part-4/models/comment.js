const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    comment: {type: String, required: true}, 
    blog: {type:mongoose.Schema.Types.ObjectId, ref:'Blog'}
})

commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
    }
})

module.exports = mongoose.model('Comment', commentSchema)