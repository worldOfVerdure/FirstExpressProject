# Less Fragile Solution

```ts
router.get('/', (req, res, next) => {
  const filePath = fileURLToPath(new URL('../views/shop.html', import.meta.url));
  res.sendFile(filePath);
});
```

vs

```ts
path.resolve('views', 'shop.html')
```

## fileURLToPath Constructor

"When a base is specified, the resolved URL is not simply a concatenation of url and base. Relative references to the parent and current directory are resolved relative to the current directory of the base URL, which includes path segments up until the last forward-slash, but not any after. Relative references to the root are resolved relative to the base origin."

So explaining the description above for fileURLToPath with the example at the top:

- "Relative reference to the parent and current directory"
  Relative reference to the parent === ../
  Relative reference to current directory === ./

- "to the current directory of the base URL, which includes path segments up until the last forward-slash, but not any after"

  Say the exact same thing, you take the base such as [...]/routes/shop.ts and then remove the shop.ts to give us the [...]/routes/

## How it ties together

Say the base url, import.meta.url, follows this absolute dummy path: file:///Users/andrew/FIRSTEXPRESSPROJECT/routes/shop.ts

"path segments up until the last forward‑slash, but not any after" and thus
file:///Users/andrew/FIRSTEXPRESSPROJECT/routes/

We will simplify base as FileURLToPath will convert a file URL to a path as:
/Users/andrew/FIRSTEXPRESSPROJECT/routes/

Thus we apply .. from the relative url, which yields:
/Users/andrew/FIRSTEXPRESSPROJECT/

We then append views/shop.html giving:
/Users/andrew/FIRSTEXPRESSPROJECT/views/shop.html

which is resolved from file:///Users/andrew/FIRSTEXPRESSPROJECT/views/shop.html
