const { User } = require('../models/index')
const { Router } = require('express');
const userRouter = Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validInfo = require('../middleware/validInfo.js');
const authorization = require('../middleware/authorization.js');


const jwtGenerator = (email) => {
          const payload = {
                    user: email,
          };

          return jwt.sign(payload, process.env.jwtSecret, { expiresIn: '1hr' });
}

const createUser = async (res, firstName, lastName, number, username, email, password) => {
          const saltRound = 10;
          const salt = await bcrypt.genSalt(saltRound);
          const bcryptPassword = await bcrypt.hash(password, salt);
          // adds new user inside database
          User.create({
                    user_name: username,
                    first_name: firstName,
                    last_name: lastName,
                    user_number: number,
                    email,
                    user_password: bcryptPassword,
          })
                    .then((user) => {
                              const token = jwtGenerator(user.email);
                              res.json({ token, user });
                    });
};


userRouter.post('/register', validInfo, async (req, res) => {
          // const {
          //           firstName,
          //           lastName,
          //           number,
          //           password,
          //           email,
          //           username,
          // } = req.body.params;
          console.log(req.body)


          const {
                    firstName,
                    lastName,
                    number,
                    password,
                    email,
                    username,
          } = req.body;

          /*
            Checks through all of database to see if user exists, if user does not exist then it creates a user with params from req.body
          */
          User.findAll({ where: { email } })
                    .then((user) => {
                              // (user.length !== 0) ? res.status(200).send(user) : createUser(res, firstName, lastName, number, username, email, password);
                              if (user.length !== 0) {
                                        res.status(200).send(user);
                              } else {
                                        createUser(res, firstName, lastName, number, username, email, password);
                              }
                    })
                    .catch((err) => {
                              console.warn('ISSUE IN GRABBING USER', err);
                    });
});

/*
validates password is the correct password in the DB for that user.
uses bcrypt's compare function to compare the normally typed in pass to
the hashed pass.
*/
const validatePassword = async (loginPass, uPassword, res, uEmail) => {
          const validPassword = await bcrypt.compare(loginPass, uPassword);
          if (!validPassword) {
                    res.status(401).send('Email or Password Incorrect');
          } else {
                    const token = jwtGenerator(uEmail);
                    res.send(token);
                    setTimeout(() => { console.info('Generated Token:', token); }, 2000);
          }
};

userRouter.post('/login', validInfo, async (req, res) => {
          // TODO: client side
          // const {
          //           email,
          //           password,
          // } = req.body.params;
          const {
                    email,
                    password,
          } = req.body;

          const loginPass = password;
          User.findAll({ where: { email } })
                    .then((user) => {
                              if (user.length > 0) {
                                        const uPassword = user[0].user_password;
                                        const uEmail = user[0].email;
                                        validatePassword(loginPass, uPassword, res, uEmail);
                              } else {
                                        res.status(401).send('incorrect');
                              }
                    });
});

userRouter.post('/is-verify', authorization, async (req, res) => {
          try {
                    res.json(true);
          } catch (err) {
                    console.warn(err);
                    res.status(500).send('Server Error');
          }
});


module.exports = {
          userRouter,
          jwtGenerator
};