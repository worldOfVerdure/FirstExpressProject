import bodyParser from 'body-parser';
import express from 'express';

import { router as adminRoutes } from './routes/admin.ts';
import { router as shopRoutes } from './routes/shop.ts';
/*
If we pass a function to app.use(), it will be executed every time the app receives a request. This
is a great way to add logging, authentication, and other common functionality to your application.
The .use() also allows us to pass in middleware functions that will be executed for every request to
the app.

This callback passed to use() recieves arguements req, res and next. The next() function is used to
pass control to the next middleware function in the stack. If you don't call next(), and the current
middleware does not end the request-response cycle, the request will be left hanging and the client
will not receive a response.
*/
const app = express();

app.use((req, res, next) => {
  if (req.url === '/favicon.ico') return res.status(204).end();
  next();
});//Remove favicon requests.

// app.use((req, res, next) => {
//   console.log('In the middleware!');
//   next();//Allows request to continue to the next middleware in line.
// });

/*
This middleware will parse the body of incoming requests and make it available on req.body. The
urlencoded parser is used for parsing form data. The extended option allows you to choose between
parsing the URL-encoded data with the querystring library (when false) or the qs library (when
true). The qs library allows for richer objects and arrays to be encoded into the URL-encoded
format, allowing for a JSON-like experience with URL-encoded.
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).send('<h1>Page Not Found.</h1>');
});

app.listen(3000);
/*
Using middleware
Express is a routing and middleware web framework that has minimal functionality of its own: An
Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object
(res), and the next middleware function in the application’s request-response cycle. The next
middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.
If the current middleware function does not end the request-response cycle, it must call next() to
pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

Application-level middleware
Router-level middleware
Error-handling middleware
Built-in middleware
Third-party middleware
You can load application-level and router-level middleware with an optional mount path. You can also
load a series of middleware functions together, which creates a sub-stack of the middleware system
at a mount point. - https://expressjs.com/en/guide/using-middleware.html
*/

/*
Prefix matching (app.use()) — the path just needs to start with the given string:
app.use('/api', handler)
Matches: /api, /api/users, /api/products/123
Does NOT match: /about, /

Exact matching (app.get(), app.post(), etc.) — the path must equal the given string exactly:
app.get('/api', handler)
Matches: /api  (only)
Does NOT match: /api/users, /api/products/123

So in your app.ts:
Method	                Path arg	                Matches
app.use(fn)	            implicitly '/'	          every request (all URLs start with /)
app.use('/foo', fn)	    '/foo'	                  /foo, /foo/bar, /foo/bar/baz
app.get('/foo', fn)	    '/foo'	                  /foo only

This distinction exists because use() is designed for middleware (e.g., logging, auth) that should
apply broadly to a subtree of routes, while the HTTP verb methods are designed for specific route
handlers.
*/
console.log('Nodemon test restart');
