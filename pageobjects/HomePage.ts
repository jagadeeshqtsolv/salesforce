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

export class HomePage {
  private static readonly L = {
    sales: { strategy: 'css' as const, value: '[title="Sales"]', shadowHost: 'one-appnav', actionKind: 'generic' as const },
    opportunities: { strategy: 'text' as const, value: 'Opportunities', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'generic' as const },
    leads: { strategy: 'text' as const, value: 'Leads', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'generic' as const },
    tasks: { strategy: 'text' as const, value: 'Tasks', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'generic' as const },
    files: { strategy: 'text' as const, value: 'Files', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'generic' as const },
    accounts: { strategy: 'text' as const, value: 'Accounts', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'generic' as const },
    contacts: { strategy: 'text' as const, value: 'Contacts', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'generic' as const },
    campaigns: { strategy: 'text' as const, value: 'Campaigns', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'generic' as const },
    dashboards: { strategy: 'text' as const, value: 'Dashboards', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'generic' as const },
    more: { strategy: 'text' as const, value: 'More', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickSales(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sales));
  }

  async expectSalesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sales), timeoutMs, soft);
  }

  async clickOpportunities(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async expectOpportunitiesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.opportunities), timeoutMs, soft);
  }

  async clickLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.leads));
  }

  async expectLeadsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.leads), timeoutMs, soft);
  }

  async clickTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async expectTasksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.tasks), timeoutMs, soft);
  }

  async clickFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.files));
  }

  async expectFilesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.files), timeoutMs, soft);
  }

  async clickAccounts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async expectAccountsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.accounts), timeoutMs, soft);
  }

  async clickContacts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async expectContactsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.contacts), timeoutMs, soft);
  }

  async clickCampaigns(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async expectCampaignsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.campaigns), timeoutMs, soft);
  }

  async clickDashboards(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.dashboards));
  }

  async expectDashboardsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.dashboards), timeoutMs, soft);
  }

  async clickMore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.more));
  }

  async expectMoreVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.more), timeoutMs, soft);
  }


  async doubleClickSales(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sales));
  }

  async longPressSales(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sales));
  }

  async expectSalesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sales), expected, timeoutMs);
  }

  async expectSalesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sales), substring, timeoutMs);
  }

  async expectSalesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sales), value, timeoutMs);
  }

  async expectSalesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sales), timeoutMs);
  }

  async expectSalesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sales), count, timeoutMs);
  }

  async scrollSalesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sales));
  }

  async doubleClickOpportunities(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async longPressOpportunities(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async expectOpportunitiesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.opportunities), expected, timeoutMs);
  }

  async expectOpportunitiesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.opportunities), substring, timeoutMs);
  }

  async expectOpportunitiesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.opportunities), value, timeoutMs);
  }

  async expectOpportunitiesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.opportunities), count, timeoutMs);
  }

  async scrollOpportunitiesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async doubleClickLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.leads));
  }

  async longPressLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.leads));
  }

  async expectLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.leads), expected, timeoutMs);
  }

  async expectLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.leads), substring, timeoutMs);
  }

  async expectLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.leads), value, timeoutMs);
  }

  async expectLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.leads), timeoutMs);
  }

  async expectLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.leads), count, timeoutMs);
  }

  async scrollLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.leads));
  }

  async doubleClickTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async longPressTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async expectTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.tasks), expected, timeoutMs);
  }

  async expectTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.tasks), substring, timeoutMs);
  }

  async expectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.tasks), value, timeoutMs);
  }

  async expectTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.tasks), count, timeoutMs);
  }

  async scrollTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async doubleClickFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.files));
  }

  async longPressFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.files));
  }

  async expectFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.files), expected, timeoutMs);
  }

  async expectFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.files), substring, timeoutMs);
  }

  async expectFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.files), value, timeoutMs);
  }

  async expectFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.files), timeoutMs);
  }

  async expectFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.files), count, timeoutMs);
  }

  async scrollFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.files));
  }

  async doubleClickAccounts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async longPressAccounts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async expectAccountsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.accounts), expected, timeoutMs);
  }

  async expectAccountsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.accounts), substring, timeoutMs);
  }

  async expectAccountsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.accounts), value, timeoutMs);
  }

  async expectAccountsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.accounts), count, timeoutMs);
  }

  async scrollAccountsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async doubleClickContacts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async longPressContacts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async expectContactsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.contacts), expected, timeoutMs);
  }

  async expectContactsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.contacts), substring, timeoutMs);
  }

  async expectContactsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.contacts), value, timeoutMs);
  }

  async expectContactsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.contacts), count, timeoutMs);
  }

  async scrollContactsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async doubleClickCampaigns(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async longPressCampaigns(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async expectCampaignsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.campaigns), expected, timeoutMs);
  }

  async expectCampaignsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.campaigns), substring, timeoutMs);
  }

  async expectCampaignsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.campaigns), value, timeoutMs);
  }

  async expectCampaignsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.campaigns), count, timeoutMs);
  }

  async scrollCampaignsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async doubleClickDashboards(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.dashboards));
  }

  async longPressDashboards(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.dashboards));
  }

  async expectDashboardsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.dashboards), expected, timeoutMs);
  }

  async expectDashboardsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.dashboards), substring, timeoutMs);
  }

  async expectDashboardsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.dashboards), value, timeoutMs);
  }

  async expectDashboardsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.dashboards), timeoutMs);
  }

  async expectDashboardsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.dashboards), count, timeoutMs);
  }

  async scrollDashboardsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.dashboards));
  }

  async doubleClickMore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.more));
  }

  async longPressMore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.more));
  }

  async expectMoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.more), timeoutMs);
  }

  async expectMoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.more), expected, timeoutMs);
  }

  async expectMoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.more), substring, timeoutMs);
  }

  async expectMoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.more), value, timeoutMs);
  }

  async expectMoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.more), timeoutMs);
  }

  async expectMoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.more), timeoutMs);
  }

  async expectMoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.more), timeoutMs);
  }

  async expectMoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.more), timeoutMs);
  }

  async expectMoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.more), timeoutMs);
  }

  async expectMoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.more), count, timeoutMs);
  }

  async scrollMoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.more));
  }

}
