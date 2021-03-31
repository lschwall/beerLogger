module.exports = (req, res, next) => {
          // const { email, username, password } = req.body.params;
          const { email, username, password } = req.body; // use for testing postman

          function validEmail(userEmail) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
          }

          if (req.path === '/register') {
                    console.info(!email.length);
                    if (![email, username, password].every(Boolean)) {
                              return res.json('Missing Credentials');
                    } if (!validEmail(email)) {
                              return res.json('Invalid Email');
                    }
          } else if (req.path === '/login') {
                    if (![email, password].every(Boolean)) {
                              return res.json('Missing Credentials');
                    } if (!validEmail(email)) {
                              return res.json('Invalid Email');
                    }
          }

          next();
};