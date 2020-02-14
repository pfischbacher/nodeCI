const Page = require('./helpers/page');

// session cookie
// eyJwYXNzcG9ydCI6eyJ1c2VyIjoiNWUyMTkyY2JmYzBhNzA0MWRhNDc3ZjYzIn19

let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000');

});

afterEach(async() => {
  await page.close();
});

test('The header has the correct text', async () => {
  const text = await page.getContentsOf('a.brand-logo');

  expect(text).toEqual('Blogster');
});

test('Clicking login start oauth flow', async () => {
  await page.click('.right a');
  
  const url = page.url();
  //console.log(url);
  expect(url).toMatch(/accounts\.google\.com/);
});

test('When signed in, shows logout button', async () => {
  //const id = '5e2192cbfc0a7041da477f63';
  await page.login();

  //const text = await page.$eval('ul.right a[href="/auth/logout"]', el => el.innerHTML);
  const text = await page.getContentsOf('ul.right a[href="/auth/logout"]');

  expect(text).toEqual('Logout');

});
