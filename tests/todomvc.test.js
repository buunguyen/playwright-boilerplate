describe("TodoMVC", () => {
  it("should let users manage to-do list", async () => {
    // Open new page
    const page = await context.newPage();

    // Go to http://todomvc.com/examples/react/#/
    await page.goto("http://todomvc.com/examples/react/#/");

    // Click input[placeholder="What needs to be done?"]
    await page.click('input[placeholder="What needs to be done?"]');

    // Fill input[placeholder="What needs to be done?"]
    await page.fill(
      'input[placeholder="What needs to be done?"]',
      "Design a prototype"
    );

    // Press Enter
    await page.press('input[placeholder="What needs to be done?"]', "Enter");

    await expect(page).toHaveText("Design a prototype");

    // Fill input[placeholder="What needs to be done?"]
    await page.fill(
      'input[placeholder="What needs to be done?"]',
      "Bring an umbrella"
    );

    // Press Enter
    await page.press('input[placeholder="What needs to be done?"]', "Enter");

    await expect(page).toHaveText("Bring an umbrella");

    // Check //div[normalize-space(.)='Design a prototype']/input[normalize-space(@type)='checkbox']
    await page.check(
      "//div[normalize-space(.)='Design a prototype']/input[normalize-space(@type)='checkbox']"
    );

    // Check //div[normalize-space(.)='Bring an umbrella']/input[normalize-space(@type)='checkbox']
    await page.check(
      "//div[normalize-space(.)='Bring an umbrella']/input[normalize-space(@type)='checkbox']"
    );

    // Click //div[normalize-space(.)='Bring an umbrella']/button
    await page.click("//div[normalize-space(.)='Bring an umbrella']/button");

    // Click input[placeholder="What needs to be done?"]
    await page.click('input[placeholder="What needs to be done?"]');

    // Click input[placeholder="What needs to be done?"]
    await page.click('input[placeholder="What needs to be done?"]');

    // Press Enter
    await page.press('input[placeholder="What needs to be done?"]', "Enter");

    // Press Enter
    await page.press('input[placeholder="What needs to be done?"]', "Enter");

    // Fill input[placeholder="What needs to be done?"]
    await page.fill(
      'input[placeholder="What needs to be done?"]',
      "Polish brand idea"
    );

    // Press Enter
    await page.press('input[placeholder="What needs to be done?"]', "Enter");

    // Click text="Completed"
    await page.click('text="Completed"');
    // assert.equal(page.url(), 'http://todomvc.com/examples/react/#/completed');
  });
});
