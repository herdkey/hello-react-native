const { device, expect, element, by } = require('detox');

describe('Landing Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display "Hello, World!" text on landing screen', async () => {
    await expect(element(by.testID('hello-text'))).toBeVisible();
    await expect(element(by.testID('hello-text'))).toHaveText('Hello, World!');
  });

  it('should have the landing screen loaded after splash', async () => {
    // Wait for splash screen to finish and landing screen to appear
    await element(by.testID('hello-text')).waitToBeVisible(5000);
    await expect(element(by.testID('hello-text'))).toBeVisible();
  });
});