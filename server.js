const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(bodyParser());

// Hello World route
/* app.use(async (ctx, next) => {
  ctx.body = "Hello World!";
  next();
}); */

// Route that returns the request body
/* app.use(async (ctx, next) => {
  if (Object.keys(ctx.request.body).length) {
    ctx.body = ctx.request.body;
  } else {
    //ctx.status = 400;
    //ctx.body = "Bad Request";
    next()
  }
}); */

// Route that returns all parameters
//app.use(async (ctx) => {
//  ctx.body = ctx.query;
//});

// Route with nested async operation
app.use(async (ctx) => {
  const result1 = await someAsyncOperation();
  const result2 = await anotherAsyncOperation(result1);
  ctx.body = result2;
});

async function someAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Result 1");
    }, 2000);
  });
}

async function anotherAsyncOperation(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Result 2: ${input}`);
    }, 1000);
  });
}

app.listen(3000);
console.log("Server listening on port 3000");