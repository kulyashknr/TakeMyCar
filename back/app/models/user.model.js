const mongoose = require('mongoose');
var bcrypt = require('bcryptjs')

const UserSchema = mongoose.Schema({
    username: String,
    password: String
}, {
    timestamps: true
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {return next()};
    bcrypt.hash(user.password,10).then((hashedPassword) => {
        user.password = hashedPassword;
        next();
    })
}, function (err) {
    next(err)
})

UserSchema.methods.comparePassword=function(candidatePassword,next){
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) return next(err);
        next(null,isMatch)
    })
}

module.exports = mongoose.model('User', UserSchema);
