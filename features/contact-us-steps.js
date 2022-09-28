const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, Until } = require('selenium-webdriver');
const { elementIsNotSelected } = require('selenium-webdriver/lib/until');

const driver = new Builder().forBrowser('chrome').build();

Given('I am on Contact us section', { timeout: 10000 }, async function () {

    await driver.get('https://bookr.co/contact-us');

    await driver.sleep(1000);
    
  });


When('I fill the formulary and Submit', async function () {
    await driver.findElement(By.id('First Name')).sendKeys('Orlando');

    await driver.findElement(By.id('Last Name')).sendKeys('Bohorquez');

    await driver.findElement(By.id('Company')).sendKeys('Bookr TEST');

    await driver.findElement(By.id('Email')).sendKeys('test@mailinator.com');

    await driver.findElement(By.id('Phone')).sendKeys('123123123123');

    await driver.findElement(By.id('Country')).sendKeys('Bahrain');

    const Industry = await driver.findElement(By.id('Industry')).click(); 
    
    await driver.wait(until.elementIsVisible(Industry), 3000)
    
    const option4 = await driver.findElement(By.xpath('*[@id="Industry"]/option[4]'))
    await driver.wait(until.elementIsVisible(Industry), 3000)

    await option4.click();
    



  });

  Then('Page displays confirmation for submitting', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  }); 
