function waitForElement(selector, callback) {
  const interval = setInterval(() => {
    const element = document.querySelector(selector);
    if (element) {
      callback(element);
      clearInterval(interval);
    }
  }, 1000);
}

waitForElement('button.mdc-button.mdc-button--unelevated.mat-mdc-unelevated-button.mat-primary.mat-mdc-button-base.ng-star-inserted', (button) => {
  if (button && button.offsetWidth > 0 && button.offsetHeight > 0 &&!button.disabled) {
    button.click();
  }
});