const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const service = new chrome.ServiceBuilder('chromedriver.exe');

async function main () {

    const driver = await new Builder().forBrowser('chrome').setChromeService(service).build();

    
    await driver.get('https://www.bookr.co');

    await driver.manage().setTimeouts({ implicit: 100000 });

    let applebutton = await driver.findElement(By.className('styles_download_options__23DQn'));
    await applebutton.click();

    await driver.wait(until.elementLocated(By.id('ac-gn-firstfocus')), 5000);

    let redirect = await driver.getCurrentUrl(); 
    console.log (redirect)

    








}

main ()