const mongoose = require('../Settings/MongooseConfig');
const bcrypt = require('bcrypt');
const SALT = 10;


let userSchema = new mongoose.Schema({
  name:  {
      type: String,
      required: [true, "Field name is required"]
  },
  nickname: {
      type: String,
      required: [true, "Field nickname is required"],
      unique: [true, "Nickname already exists"]
  },
  email: {
      type: String,
      required: [true, "Field email is required"],
      unique: [true, "Email already exists"]
  },
  password: { 
      type: String, 
      required: [true, "Field password is required"] 
  },
  picture: {
      type: String,
  },
  dateOfBirth: {
      type: Date
  }
});



userSchema.pre('save', function(next) {
    let user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            user.password = hash;
            next();
        });

    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

mongoose.model('User', userSchema);
