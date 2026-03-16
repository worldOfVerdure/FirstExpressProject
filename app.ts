import express from 'express';

/*
If we pass a function to app.use(), it will be executed every time the app receives a request. This
is a great way to add logging, authentication, and other common functionality to your application. -

This callback passed to use() recieves arguements req, res and next. The next function is used to
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

app.use('/add-product', (req, res, next) => {
  console.log('In an add product middleware!', req.url);
  res.send('<h1>The Add Product Page</h1>');//Allows us to send a response. This allows us to send a body of type any.
});

app.use('/', (req, res, next) => {
  console.log('In another middleware!', req.url);
  res.send('<h1>Hello from Express!</h1>');//Allows us to send a response. This allows us to send a body of type any.
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
