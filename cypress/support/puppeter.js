const puppeteer = require("puppeteer");

exports.login_facebook = async function loginFacebook(userObject) {
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
                await browser.close();
                return true;
            } catch (e) {
                console.error(e);
                await browser.close();
                return false;
            }
        });
    return result;
};

exports.work_with_several_tabs = async function workWithSeveralTabs() {
    const browser = await puppeteer.launch({headless: false});
    try {
        const page1 = await browser.newPage();          // open new tab1
        await page1.goto('https://www.google.com/gmail/about/#');          // go to site1.com
        const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page())));
        await page1.click('a[ga-event-action="sign in"]');
        const newPage = await newPagePromise;
        await newPage.waitForSelector('input[name="identifier"]');
        await newPage.type('input[name="identifier"]', 'kateyurasova@gmail.com', {delay: 50});
        await newPage.waitFor(5000);
        await newPage.close();
        await browser.close();
    } catch (e) {
        console.error(e);
        await browser.close();
        return false
    }
    return true;
};

