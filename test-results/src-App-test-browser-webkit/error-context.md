# Test info

- Name: test browser
- Location: C:\Users\Srdjan\Desktop\Restoran-Milunka-Website\src\App.test.js:3:5

# Error details

```
Error: page.goto: Could not connect to server
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

    at C:\Users\Srdjan\Desktop\Restoran-Milunka-Website\src\App.test.js:5:14
```

# Test source

```ts
   1 | import { test } from "@playwright/test";
   2 |
   3 | test("test browser", async ({ page }) => {
   4 |   // point this to wherever you want
>  5 |   await page.goto("http://localhost:3000/");
     |              ^ Error: page.goto: Could not connect to server
   6 |
   7 |   // keep browser open
   8 |   await page.pause();
   9 | });
  10 |
```