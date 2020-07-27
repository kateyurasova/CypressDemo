const puppeteer = require("puppeteer");

exports.some_method = async function someMethod(userObject) {
    const {email, password, url} = userObject;
    const result = await puppeteer.launch({headless: false})
        .then(async browser => {
            try {
                let page = await browser.newPage();
                await page.goto(url);
                await page.type('input[id="email"]', email, {delay: 50});
                await page.type('input[id="pass"]', password, {delay: 50});
                await page.click('input[data-testid="royal_login_button"]');
                await page.waitFor(5000);
                browser.close();
                return true;
            } catch (e) {
                console.error(e);
                browser.close();
                return false;
            }
        });
    return result;
};



