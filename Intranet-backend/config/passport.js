const passport =require('passport');
const localStratgy=require('passport-local').Strategy;
const User = require('../models/users');

passport.use(new localStratgy({
    usernameField:'email',
    function(email,password,next){
        user.findOne({email:email},function(err,user){
            if(err){
                console.log('Error in finding user');
                return done(err)
            }

            if(!user||user.password!=password){
                console.log('Invalid Username/Password');
                return done(null,false);
            }
        })
    }
}))


passport.serializeUser(function(user,done){
    done(null,user.id)
})


passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
        if(err){
            console.log('error in finding user');
            return done(err); 
        }

        return done(null,user);
    })
})

module.exports=passport