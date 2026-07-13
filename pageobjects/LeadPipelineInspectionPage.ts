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

export class LeadPipelineInspectionPage {
  private static readonly L = {
    myLeads: { strategy: 'text' as const, value: 'My Leads', shadowHost: 'lst-list-view-picker', actionKind: 'generic' as const },
    refresh: { strategy: 'css' as const, value: '[title="Refresh"]', actionKind: 'button' as const },
    inlineEditButton: { strategy: 'css' as const, value: '[title="Edit List"]', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    new: { strategy: 'css' as const, value: 'button[name="New"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    pipelineInspectionToListView: { strategy: 'role' as const, value: 'List View', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    massChangeStatus: { strategy: 'css' as const, value: 'button[name="MassChangeStatus"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    massChangeOwner: { strategy: 'css' as const, value: 'button[name="MassChangeOwner"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    sendListEmailAction: { strategy: 'css' as const, value: 'button[name="SendListEmailAction"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    massAssignRecordLabel: { strategy: 'role' as const, value: 'Assign Label', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickMyLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads));
  }

  async expectMyLeadsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs, soft);
  }

  async clickRefresh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.refresh));
  }

  async doubleClickRefresh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.refresh));
  }

  async expectRefreshVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs, soft);
  }

  async clickInlineEditButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton));
  }

  async doubleClickInlineEditButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton));
  }

  async expectInlineEditButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs, soft);
  }

  async clickNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.new));
  }

  async doubleClickNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.new));
  }

  async expectNewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs, soft);
  }

  async clickPipelineInspectionToListView(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView));
  }

  async doubleClickPipelineInspectionToListView(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView));
  }

  async expectPipelineInspectionToListViewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs, soft);
  }

  async clickMassChangeStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus));
  }

  async doubleClickMassChangeStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus));
  }

  async expectMassChangeStatusVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs, soft);
  }

  async clickMassChangeOwner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner));
  }

  async doubleClickMassChangeOwner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner));
  }

  async expectMassChangeOwnerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs, soft);
  }

  async clickSendListEmailAction(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction));
  }

  async doubleClickSendListEmailAction(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction));
  }

  async expectSendListEmailActionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs, soft);
  }

  async clickMassAssignRecordLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel));
  }

  async doubleClickMassAssignRecordLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel));
  }

  async expectMassAssignRecordLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs, soft);
  }


  async doubleClickMyLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads));
  }

  async longPressMyLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads));
  }

  async expectMyLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), expected, timeoutMs);
  }

  async expectMyLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), substring, timeoutMs);
  }

  async expectMyLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), value, timeoutMs);
  }

  async expectMyLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), timeoutMs);
  }

  async expectMyLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads), count, timeoutMs);
  }

  async scrollMyLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.myLeads));
  }

  async longPressRefresh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.refresh));
  }

  async expectRefreshHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), expected, timeoutMs);
  }

  async expectRefreshContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), substring, timeoutMs);
  }

  async expectRefreshValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), value, timeoutMs);
  }

  async expectRefreshEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), timeoutMs);
  }

  async expectRefreshCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.refresh), count, timeoutMs);
  }

  async scrollRefreshIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.refresh));
  }

  async longPressInlineEditButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton));
  }

  async expectInlineEditButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), expected, timeoutMs);
  }

  async expectInlineEditButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), substring, timeoutMs);
  }

  async expectInlineEditButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), value, timeoutMs);
  }

  async expectInlineEditButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton), count, timeoutMs);
  }

  async scrollInlineEditButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.inlineEditButton));
  }

  async longPressNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.new));
  }

  async expectNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.new), expected, timeoutMs);
  }

  async expectNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.new), substring, timeoutMs);
  }

  async expectNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.new), value, timeoutMs);
  }

  async expectNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.new), timeoutMs);
  }

  async expectNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.new), count, timeoutMs);
  }

  async scrollNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.new));
  }

  async longPressPipelineInspectionToListView(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView));
  }

  async expectPipelineInspectionToListViewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), expected, timeoutMs);
  }

  async expectPipelineInspectionToListViewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), substring, timeoutMs);
  }

  async expectPipelineInspectionToListViewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), value, timeoutMs);
  }

  async expectPipelineInspectionToListViewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), timeoutMs);
  }

  async expectPipelineInspectionToListViewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView), count, timeoutMs);
  }

  async scrollPipelineInspectionToListViewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.pipelineInspectionToListView));
  }

  async longPressMassChangeStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus));
  }

  async expectMassChangeStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), expected, timeoutMs);
  }

  async expectMassChangeStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), substring, timeoutMs);
  }

  async expectMassChangeStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), value, timeoutMs);
  }

  async expectMassChangeStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), timeoutMs);
  }

  async expectMassChangeStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus), count, timeoutMs);
  }

  async scrollMassChangeStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeStatus));
  }

  async longPressMassChangeOwner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner));
  }

  async expectMassChangeOwnerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), expected, timeoutMs);
  }

  async expectMassChangeOwnerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), substring, timeoutMs);
  }

  async expectMassChangeOwnerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), value, timeoutMs);
  }

  async expectMassChangeOwnerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner), count, timeoutMs);
  }

  async scrollMassChangeOwnerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massChangeOwner));
  }

  async longPressSendListEmailAction(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction));
  }

  async expectSendListEmailActionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), expected, timeoutMs);
  }

  async expectSendListEmailActionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), substring, timeoutMs);
  }

  async expectSendListEmailActionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), value, timeoutMs);
  }

  async expectSendListEmailActionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), timeoutMs);
  }

  async expectSendListEmailActionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction), count, timeoutMs);
  }

  async scrollSendListEmailActionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.sendListEmailAction));
  }

  async longPressMassAssignRecordLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel));
  }

  async expectMassAssignRecordLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), expected, timeoutMs);
  }

  async expectMassAssignRecordLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), substring, timeoutMs);
  }

  async expectMassAssignRecordLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), value, timeoutMs);
  }

  async expectMassAssignRecordLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), timeoutMs);
  }

  async expectMassAssignRecordLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel), count, timeoutMs);
  }

  async scrollMassAssignRecordLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadPipelineInspectionPage.L.massAssignRecordLabel));
  }

}
