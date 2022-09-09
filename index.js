const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch({
  })
  const page = await browser.newPage()

  await page.setViewportSize({ width: 1280, height: 800 })
  await page.goto('https://www.bet365.com/#/AVR/B144/')
  await page.waitForTimeout(7000)
  await page.screenshot({ path: 'my_screenshot.png' })
  await browser.close()
})()
