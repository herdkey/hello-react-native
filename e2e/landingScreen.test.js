const { device, expect, element, by, waitFor } = require('detox');

describe('Landing Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display "Hello, World!" text on landing screen', async () => {
    // Wait for splash screen to finish (it takes 1 second + some time for BootSplash.hide)
    await waitFor(element(by.id('hello-text')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('hello-text'))).toBeVisible();
    await expect(element(by.id('hello-text'))).toHaveText('Hello, World!');
  });

  it('should have the landing screen loaded after splash', async () => {
    // Wait for splash screen to finish and landing screen to appear
    await waitFor(element(by.id('hello-text')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('hello-text'))).toBeVisible();
  });
});
