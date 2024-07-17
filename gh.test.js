let page;

beforeEach(async () => {
  page = await browser.newPage();
  page.setDefaultNavigationTimeout(60000);
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  });
});

describe("Task two, add three tests", () => {
  test("The page contains bottom Sibscribe", async () => {
    const btnSelector = ".btn-mktg.mb-4.btn-muted-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Subscribe");
  });
  test("The page contains bottom Sign up for free", async () => {
    const btnSelector = ".btn-mktg.btn-large-mktg.btn-muted-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  });

  test.only("Enter email to field sing up with github", async () => {
    await page.locator(".mr-lg-3.color-fg-inherit.flex-order-2").click();
    await page
      .locator(".form-control.f4-mktg.width-full.rounded-md-right-0")
      .fill("cat@mail.com");
    await page
      .locator(
        ".btn-mktg.width-full.width-md-auto.mb-3.mb-md-0.rounded-md-left-0.home-campaign-signup-button.btn-signup-mktg"
      )
      .click();
  });
});
