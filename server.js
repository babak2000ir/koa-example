const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(bodyParser());

// Hello World route
app.use(async (ctx) => {
  ctx.body = "Hello World!";
});

// Route that returns the request body
app.use(async (ctx) => {
  if (ctx.request.body) {
    ctx.body = ctx.request.body;
  } else {
    ctx.throw(400, "Bad Request");
  }
});

// Route that returns all parameters
app.use(async (ctx) => {
  ctx.body = ctx.query;
});

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
    }, 1000);
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