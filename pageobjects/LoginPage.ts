import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class LoginPage {
  private static readonly L = {
    username: { strategy: 'css' as const, value: '#username[name="username"]', actionKind: 'textbox' as const },
    pw: { strategy: 'css' as const, value: '#password[name="pw"]', actionKind: 'textbox' as const },
    login: { strategy: 'css' as const, value: '#Login[name="Login"]', actionKind: 'generic' as const },
    rememberMe: { strategy: 'text' as const, value: 'Remember me', actionKind: 'generic' as const },
    forgotYourPassword: { strategy: 'css' as const, value: '#forgot_password_link', actionKind: 'link' as const },
    salesforceLogin: { strategy: 'css' as const, value: '#logo[name="logo"]', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async fillUsername(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.username), value);
  }

  async clearUsername(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async getUsernameValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async expectUsernameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.username), timeoutMs, soft);
  }

  async fillPw(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.pw), value);
  }

  async clearPw(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.pw));
  }

  async getPwValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.pw));
  }

  async expectPwVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.pw), timeoutMs, soft);
  }

  async clickLogin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async expectLoginVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.login), timeoutMs, soft);
  }

  async clickRememberMe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.rememberMe));
  }

  async expectRememberMeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.rememberMe), timeoutMs, soft);
  }

  async clickForgotYourPassword(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.forgotYourPassword));
  }

  async expectForgotYourPasswordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs, soft);
  }

  async clickSalesforceLogin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin));
  }

  async expectSalesforceLoginVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs, soft);
  }


  async typeTextUsername(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.username), value);
  }

  async expectUsernameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.username), expected, timeoutMs);
  }

  async expectUsernameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.username), substring, timeoutMs);
  }

  async expectUsernameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.username), value, timeoutMs);
  }

  async expectUsernameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.username), count, timeoutMs);
  }

  async scrollUsernameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async typeTextPw(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.pw), value);
  }

  async expectPwHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.pw), expected, timeoutMs);
  }

  async expectPwContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.pw), substring, timeoutMs);
  }

  async expectPwValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.pw), value, timeoutMs);
  }

  async expectPwEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.pw), timeoutMs);
  }

  async expectPwCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.pw), count, timeoutMs);
  }

  async scrollPwIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.pw));
  }

  async doubleClickLogin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async longPressLogin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async expectLoginHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.login), expected, timeoutMs);
  }

  async expectLoginContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.login), substring, timeoutMs);
  }

  async expectLoginValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.login), value, timeoutMs);
  }

  async expectLoginEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.login), count, timeoutMs);
  }

  async scrollLoginIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async doubleClickRememberMe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.rememberMe));
  }

  async longPressRememberMe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.rememberMe));
  }

  async expectRememberMeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.rememberMe), timeoutMs);
  }

  async expectRememberMeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.rememberMe), expected, timeoutMs);
  }

  async expectRememberMeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.rememberMe), substring, timeoutMs);
  }

  async expectRememberMeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.rememberMe), value, timeoutMs);
  }

  async expectRememberMeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.rememberMe), timeoutMs);
  }

  async expectRememberMeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.rememberMe), timeoutMs);
  }

  async expectRememberMeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.rememberMe), timeoutMs);
  }

  async expectRememberMeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.rememberMe), timeoutMs);
  }

  async expectRememberMeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.rememberMe), timeoutMs);
  }

  async expectRememberMeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.rememberMe), count, timeoutMs);
  }

  async scrollRememberMeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.rememberMe));
  }

  async doubleClickForgotYourPassword(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.forgotYourPassword));
  }

  async longPressForgotYourPassword(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.forgotYourPassword));
  }

  async expectForgotYourPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.forgotYourPassword), expected, timeoutMs);
  }

  async expectForgotYourPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.forgotYourPassword), substring, timeoutMs);
  }

  async expectForgotYourPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.forgotYourPassword), value, timeoutMs);
  }

  async expectForgotYourPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.forgotYourPassword), timeoutMs);
  }

  async expectForgotYourPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.forgotYourPassword), count, timeoutMs);
  }

  async scrollForgotYourPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.forgotYourPassword));
  }

  async doubleClickSalesforceLogin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin));
  }

  async longPressSalesforceLogin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin));
  }

  async expectSalesforceLoginHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.salesforceLogin), expected, timeoutMs);
  }

  async expectSalesforceLoginContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.salesforceLogin), substring, timeoutMs);
  }

  async expectSalesforceLoginValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.salesforceLogin), value, timeoutMs);
  }

  async expectSalesforceLoginEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.salesforceLogin), timeoutMs);
  }

  async expectSalesforceLoginCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.salesforceLogin), count, timeoutMs);
  }

  async scrollSalesforceLoginIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.salesforceLogin));
  }

}
