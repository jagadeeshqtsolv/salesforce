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

export class LeadRecordPage {
  private static readonly L = {
    recordHeaderTitle: { strategy: 'css', value: 'records-lwc-detail-panel h1.slds-page-header__title', actionKind: 'generic' as const },
    leadStatusValue: { strategy: 'css', value: '[data-field="Status"]', actionKind: 'generic' as const }
  } as const;

  constructor(private readonly page: Page) {}

  async clickRecordHeaderTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle));
  }

  async doubleClickRecordHeaderTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle));
  }

  async longPressRecordHeaderTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle));
  }

  async expectRecordHeaderTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), timeoutMs);
  }

  async expectRecordHeaderTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), timeoutMs);
  }

  async expectRecordHeaderTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), expected, timeoutMs);
  }

  async expectRecordHeaderTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), substring, timeoutMs);
  }

  async expectRecordHeaderTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), value, timeoutMs);
  }

  async expectRecordHeaderTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), timeoutMs);
  }

  async expectRecordHeaderTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), timeoutMs);
  }

  async expectRecordHeaderTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), timeoutMs);
  }

  async expectRecordHeaderTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), timeoutMs);
  }

  async expectRecordHeaderTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), timeoutMs);
  }

  async expectRecordHeaderTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), count, timeoutMs);
  }

  async scrollRecordHeaderTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle));
  }

  async clickLeadStatusValue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadRecordPage.L.leadStatusValue));
  }

  async doubleClickLeadStatusValue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadRecordPage.L.leadStatusValue));
  }

  async longPressLeadStatusValue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadRecordPage.L.leadStatusValue));
  }

  async expectLeadStatusValueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadRecordPage.L.leadStatusValue), timeoutMs);
  }

  async expectLeadStatusValueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadRecordPage.L.leadStatusValue), timeoutMs);
  }

  async expectLeadStatusValueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadRecordPage.L.leadStatusValue), expected, timeoutMs);
  }

  async expectLeadStatusValueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadRecordPage.L.leadStatusValue), substring, timeoutMs);
  }

  async expectLeadStatusValueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadRecordPage.L.leadStatusValue), value, timeoutMs);
  }

  async expectLeadStatusValueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadRecordPage.L.leadStatusValue), timeoutMs);
  }

  async expectLeadStatusValueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadRecordPage.L.leadStatusValue), timeoutMs);
  }

  async expectLeadStatusValueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadRecordPage.L.leadStatusValue), timeoutMs);
  }

  async expectLeadStatusValueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadRecordPage.L.leadStatusValue), timeoutMs);
  }

  async expectLeadStatusValueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadRecordPage.L.leadStatusValue), timeoutMs);
  }

  async expectLeadStatusValueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadRecordPage.L.leadStatusValue), count, timeoutMs);
  }

  async scrollLeadStatusValueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadRecordPage.L.leadStatusValue));
  }

  async expectRecordHeaderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadRecordPage.L.recordHeaderTitle), substring, timeoutMs);
  }

  async expectLeadStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadRecordPage.L.leadStatusValue), substring, timeoutMs);
  }

}
