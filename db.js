const enviroment = proccess.env.NODE_ENV || 'development'
const config = require('./knexfile')[enviroment]
const connection = require('knex')(config)
const db = connection

function checkEmailsMatch(password, reenter){
  if(password == reenter){
    return true
  } else {return false}
}

function addUser(username, password, reenter, firstname, surname, email, prefrole) {
  if(checkEmailsMatch(password, reenter)){
    return db('users')
      .insert({ user_name: username, password: password, first_name: firstname, surname: surname, email: email, pref_role: prefrole })
      .then()
  } else {res.redirect('/signup')}
}


module.exports = {
  addUser
}
