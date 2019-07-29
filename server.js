const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes')


// Routes
//const routes = require('./routes');

// Set View Engine
app.set('view engine', 'ejs');

// --------------------------------------------------- MIDDLEWARE --------------------------------------------------- //

// Method Override
app.use(methodOverride('_method'));

// BodyParser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Serve Public Directory
app.use(express.static(__dirname + '/public'));

// Custom Logger Middleware
// app.use((req, res, next) => {
//   const url = req.url;
//   const method = req.method;
//   const requestedAt = new Date().toLocaleString();
//   console.table({ url, method, requestedAt });
//   next();
// });

// use the express Session
app.use(session({
  secret: 'thi is used to encryp the sesscion obj!',
  resave: false,
  saveUninitialized: false // Only save the session if a property has been added to req.session
}));

// ------------------------------------------------- HTML ENDPOINTS ------------------------------------------------- //

// GET Root Route
//  views/index.ejs
app.get('/', (req, res) => {
    console.log('getting root routeindex.ejs')
    res.render('index');
});


// Accounts Routes
app.use('/accounts', routes.accounts);
// Profile Routes
// app.use('/profile', routes.profile);


// ------------------------------------------------- API ENDPOINTS ------------------------------------------------- //


// GET Users Route
// app.get('/api/v1/users', (req, res) => {
//   db.User.find((err, allUsers) => {
//     if (err) return res.json(err);
//     res.json(allUsers);
//   });
// });

// app.get('/api/v1/nuke', (req, res) => {
//   db.User.deleteMany((err, deletedUsers) => {
//     if (err) return res.json(err);
//     res.json({msg: 'success'});
//   });
// });

// -------------------------------------------------- START SERVER -------------------------------------------------- //

// Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
