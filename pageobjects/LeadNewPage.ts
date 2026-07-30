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

export class LeadNewPage {
  private static readonly L = {
    salutation: { strategy: 'role' as const, value: 'Salutation', role: 'button', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    firstName: { strategy: 'css' as const, value: '[name="firstName"][placeholder="First Name"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    lastName: { strategy: 'css' as const, value: '[name="lastName"][placeholder="Last Name"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    company: { strategy: 'css' as const, value: '[name="Company"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    mobilePhone: { strategy: 'css' as const, value: '[name="MobilePhone"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    phone: { strategy: 'css' as const, value: '[name="Phone"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    title: { strategy: 'css' as const, value: '[name="Title"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    leadSource: { strategy: 'role' as const, value: 'Lead Source', role: 'button', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    industry: { strategy: 'role' as const, value: 'Industry', role: 'button', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    openNotContacted: { strategy: 'text' as const, value: 'Open - Not Contacted', shadowHost: 'lightning-base-combobox', actionKind: 'generic' as const },
    numberOfEmployees: { strategy: 'css' as const, value: '[name="NumberOfEmployees"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    country: { strategy: 'role' as const, value: 'Country', role: 'combobox', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    street: { strategy: 'css' as const, value: '[name="street"]', shadowHost: 'lightning-textarea', actionKind: 'textbox' as const },
    postalCode: { strategy: 'css' as const, value: '[name="postalCode"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    productInterest: { strategy: 'role' as const, value: 'Product Interest', role: 'button', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    currentGeneratorsC: { strategy: 'css' as const, value: '[name="CurrentGenerators__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    sICCodeC: { strategy: 'css' as const, value: '[name="SICCode__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    primary: { strategy: 'role' as const, value: 'Primary', role: 'button', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    numberofLocationsC: { strategy: 'css' as const, value: '[name="NumberofLocations__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    input488: { strategy: 'css' as const, value: '#input-488', shadowHost: 'lightning-textarea', actionKind: 'textbox' as const },
    cancelEdit: { strategy: 'role' as const, value: 'Cancel', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    saveAndNew: { strategy: 'role' as const, value: 'Save & New', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    saveEdit: { strategy: 'role' as const, value: 'Save', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickSalutation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async doubleClickSalutation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async expectSalutationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs, soft);
  }

  async fillFirstName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.firstName), value);
  }

  async clearFirstName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.firstName));
  }

  async getFirstNameValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.firstName));
  }

  async expectFirstNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs, soft);
  }

  async fillLastName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.lastName), value);
  }

  async clearLastName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.lastName));
  }

  async getLastNameValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.lastName));
  }

  async expectLastNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs, soft);
  }

  async fillCompany(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.company), value);
  }

  async clearCompany(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.company));
  }

  async getCompanyValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.company));
  }

  async expectCompanyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.company), timeoutMs, soft);
  }

  async fillMobilePhone(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone), value);
  }

  async clearMobilePhone(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone));
  }

  async getMobilePhoneValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone));
  }

  async expectMobilePhoneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs, soft);
  }

  async fillPhone(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.phone), value);
  }

  async clearPhone(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.phone));
  }

  async getPhoneValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.phone));
  }

  async expectPhoneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.phone), timeoutMs, soft);
  }

  async fillTitle(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.title), value);
  }

  async clearTitle(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.title));
  }

  async getTitleValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.title));
  }

  async expectTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.title), timeoutMs, soft);
  }

  async clickLeadSource(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async doubleClickLeadSource(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async expectLeadSourceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs, soft);
  }

  async clickIndustry(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async doubleClickIndustry(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async expectIndustryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.industry), timeoutMs, soft);
  }

  async clickOpenNotContacted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.openNotContacted));
  }

  async expectOpenNotContactedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.openNotContacted), timeoutMs, soft);
  }

  async fillNumberOfEmployees(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees), value);
  }

  async clearNumberOfEmployees(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees));
  }

  async getNumberOfEmployeesValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees));
  }

  async expectNumberOfEmployeesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs, soft);
  }

  async fillCountry(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.country), value);
  }

  async clearCountry(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.country));
  }

  async getCountryValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.country));
  }

  async expectCountryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.country), timeoutMs, soft);
  }

  async fillStreet(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.street), value);
  }

  async clearStreet(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.street));
  }

  async getStreetValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.street));
  }

  async expectStreetVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.street), timeoutMs, soft);
  }

  async fillPostalCode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode), value);
  }

  async clearPostalCode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode));
  }

  async getPostalCodeValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode));
  }

  async expectPostalCodeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs, soft);
  }

  async clickProductInterest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async doubleClickProductInterest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async expectProductInterestVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs, soft);
  }

  async fillCurrentGeneratorsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), value);
  }

  async clearCurrentGeneratorsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC));
  }

  async getCurrentGeneratorsCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC));
  }

  async expectCurrentGeneratorsCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs, soft);
  }

  async fillSICCodeC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC), value);
  }

  async clearSICCodeC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC));
  }

  async getSICCodeCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC));
  }

  async expectSICCodeCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs, soft);
  }

  async clickPrimary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async doubleClickPrimary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async expectPrimaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.primary), timeoutMs, soft);
  }

  async fillNumberofLocationsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC), value);
  }

  async clearNumberofLocationsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC));
  }

  async getNumberofLocationsCValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC));
  }

  async expectNumberofLocationsCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs, soft);
  }

  async fillInput488(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.input488), value);
  }

  async clearInput488(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.input488));
  }

  async getInput488Value(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.input488));
  }

  async expectInput488Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.input488), timeoutMs, soft);
  }

  async clickCancelEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async doubleClickCancelEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async expectCancelEditVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs, soft);
  }

  async clickSaveAndNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async doubleClickSaveAndNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async expectSaveAndNewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs, soft);
  }

  async clickSaveEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

  async doubleClickSaveEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

  async expectSaveEditVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs, soft);
  }


  async longPressSalutation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async expectSalutationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.salutation), expected, timeoutMs);
  }

  async expectSalutationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.salutation), substring, timeoutMs);
  }

  async expectSalutationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.salutation), value, timeoutMs);
  }

  async expectSalutationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.salutation), count, timeoutMs);
  }

  async scrollSalutationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async typeTextFirstName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.firstName), value);
  }

  async expectFirstNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.firstName), expected, timeoutMs);
  }

  async expectFirstNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.firstName), substring, timeoutMs);
  }

  async expectFirstNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.firstName), value, timeoutMs);
  }

  async expectFirstNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.firstName), count, timeoutMs);
  }

  async scrollFirstNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.firstName));
  }

  async typeTextLastName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.lastName), value);
  }

  async expectLastNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.lastName), expected, timeoutMs);
  }

  async expectLastNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.lastName), substring, timeoutMs);
  }

  async expectLastNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.lastName), value, timeoutMs);
  }

  async expectLastNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.lastName), count, timeoutMs);
  }

  async scrollLastNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.lastName));
  }

  async typeTextCompany(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.company), value);
  }

  async expectCompanyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.company), expected, timeoutMs);
  }

  async expectCompanyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.company), substring, timeoutMs);
  }

  async expectCompanyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.company), value, timeoutMs);
  }

  async expectCompanyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.company), count, timeoutMs);
  }

  async scrollCompanyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.company));
  }

  async typeTextMobilePhone(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone), value);
  }

  async expectMobilePhoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.mobilePhone), expected, timeoutMs);
  }

  async expectMobilePhoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.mobilePhone), substring, timeoutMs);
  }

  async expectMobilePhoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.mobilePhone), value, timeoutMs);
  }

  async expectMobilePhoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.mobilePhone), count, timeoutMs);
  }

  async scrollMobilePhoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone));
  }

  async typeTextPhone(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.phone), value);
  }

  async expectPhoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.phone), expected, timeoutMs);
  }

  async expectPhoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.phone), substring, timeoutMs);
  }

  async expectPhoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.phone), value, timeoutMs);
  }

  async expectPhoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.phone), count, timeoutMs);
  }

  async scrollPhoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.phone));
  }

  async typeTextTitle(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.title), value);
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.title), expected, timeoutMs);
  }

  async expectTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.title), substring, timeoutMs);
  }

  async expectTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.title), value, timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.title), count, timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.title));
  }

  async longPressLeadSource(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async expectLeadSourceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadSource), expected, timeoutMs);
  }

  async expectLeadSourceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadSource), substring, timeoutMs);
  }

  async expectLeadSourceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadSource), value, timeoutMs);
  }

  async expectLeadSourceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadSource), count, timeoutMs);
  }

  async scrollLeadSourceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async longPressIndustry(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async expectIndustryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.industry), expected, timeoutMs);
  }

  async expectIndustryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.industry), substring, timeoutMs);
  }

  async expectIndustryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.industry), value, timeoutMs);
  }

  async expectIndustryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.industry), count, timeoutMs);
  }

  async scrollIndustryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async doubleClickOpenNotContacted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.openNotContacted));
  }

  async longPressOpenNotContacted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.openNotContacted));
  }

  async expectOpenNotContactedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.openNotContacted), timeoutMs);
  }

  async expectOpenNotContactedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.openNotContacted), expected, timeoutMs);
  }

  async expectOpenNotContactedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.openNotContacted), substring, timeoutMs);
  }

  async expectOpenNotContactedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.openNotContacted), value, timeoutMs);
  }

  async expectOpenNotContactedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.openNotContacted), timeoutMs);
  }

  async expectOpenNotContactedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.openNotContacted), timeoutMs);
  }

  async expectOpenNotContactedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.openNotContacted), timeoutMs);
  }

  async expectOpenNotContactedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.openNotContacted), timeoutMs);
  }

  async expectOpenNotContactedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.openNotContacted), timeoutMs);
  }

  async expectOpenNotContactedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.openNotContacted), count, timeoutMs);
  }

  async scrollOpenNotContactedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.openNotContacted));
  }

  async typeTextNumberOfEmployees(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees), value);
  }

  async expectNumberOfEmployeesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.numberOfEmployees), expected, timeoutMs);
  }

  async expectNumberOfEmployeesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.numberOfEmployees), substring, timeoutMs);
  }

  async expectNumberOfEmployeesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.numberOfEmployees), value, timeoutMs);
  }

  async expectNumberOfEmployeesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.numberOfEmployees), count, timeoutMs);
  }

  async scrollNumberOfEmployeesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees));
  }

  async typeTextCountry(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.country), value);
  }

  async expectCountryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.country), expected, timeoutMs);
  }

  async expectCountryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.country), substring, timeoutMs);
  }

  async expectCountryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.country), value, timeoutMs);
  }

  async expectCountryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.country), count, timeoutMs);
  }

  async scrollCountryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.country));
  }

  async typeTextStreet(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.street), value);
  }

  async expectStreetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.street), expected, timeoutMs);
  }

  async expectStreetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.street), substring, timeoutMs);
  }

  async expectStreetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.street), value, timeoutMs);
  }

  async expectStreetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.street), count, timeoutMs);
  }

  async scrollStreetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.street));
  }

  async typeTextPostalCode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode), value);
  }

  async expectPostalCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.postalCode), expected, timeoutMs);
  }

  async expectPostalCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.postalCode), substring, timeoutMs);
  }

  async expectPostalCodeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.postalCode), value, timeoutMs);
  }

  async expectPostalCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.postalCode), count, timeoutMs);
  }

  async scrollPostalCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode));
  }

  async longPressProductInterest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async expectProductInterestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.productInterest), expected, timeoutMs);
  }

  async expectProductInterestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.productInterest), substring, timeoutMs);
  }

  async expectProductInterestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.productInterest), value, timeoutMs);
  }

  async expectProductInterestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.productInterest), count, timeoutMs);
  }

  async scrollProductInterestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async typeTextCurrentGeneratorsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), value);
  }

  async expectCurrentGeneratorsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), expected, timeoutMs);
  }

  async expectCurrentGeneratorsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), substring, timeoutMs);
  }

  async expectCurrentGeneratorsCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), value, timeoutMs);
  }

  async expectCurrentGeneratorsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), count, timeoutMs);
  }

  async scrollCurrentGeneratorsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC));
  }

  async typeTextSICCodeC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC), value);
  }

  async expectSICCodeCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.sICCodeC), expected, timeoutMs);
  }

  async expectSICCodeCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.sICCodeC), substring, timeoutMs);
  }

  async expectSICCodeCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.sICCodeC), value, timeoutMs);
  }

  async expectSICCodeCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.sICCodeC), count, timeoutMs);
  }

  async scrollSICCodeCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC));
  }

  async longPressPrimary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async expectPrimaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.primary), expected, timeoutMs);
  }

  async expectPrimaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.primary), substring, timeoutMs);
  }

  async expectPrimaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.primary), value, timeoutMs);
  }

  async expectPrimaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.primary), count, timeoutMs);
  }

  async scrollPrimaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async typeTextNumberofLocationsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC), value);
  }

  async expectNumberofLocationsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.numberofLocationsC), expected, timeoutMs);
  }

  async expectNumberofLocationsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.numberofLocationsC), substring, timeoutMs);
  }

  async expectNumberofLocationsCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.numberofLocationsC), value, timeoutMs);
  }

  async expectNumberofLocationsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.numberofLocationsC), count, timeoutMs);
  }

  async scrollNumberofLocationsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC));
  }

  async typeTextInput488(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.input488), value);
  }

  async expectInput488Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.input488), timeoutMs);
  }

  async expectInput488Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.input488), expected, timeoutMs);
  }

  async expectInput488ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.input488), substring, timeoutMs);
  }

  async expectInput488Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.input488), value, timeoutMs);
  }

  async expectInput488Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.input488), timeoutMs);
  }

  async expectInput488Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.input488), timeoutMs);
  }

  async expectInput488Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.input488), timeoutMs);
  }

  async expectInput488Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.input488), timeoutMs);
  }

  async expectInput488Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.input488), timeoutMs);
  }

  async expectInput488Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.input488), count, timeoutMs);
  }

  async scrollInput488IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.input488));
  }

  async longPressCancelEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async expectCancelEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.cancelEdit), expected, timeoutMs);
  }

  async expectCancelEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.cancelEdit), substring, timeoutMs);
  }

  async expectCancelEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.cancelEdit), value, timeoutMs);
  }

  async expectCancelEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.cancelEdit), count, timeoutMs);
  }

  async scrollCancelEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async longPressSaveAndNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async expectSaveAndNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.saveAndNew), expected, timeoutMs);
  }

  async expectSaveAndNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.saveAndNew), substring, timeoutMs);
  }

  async expectSaveAndNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.saveAndNew), value, timeoutMs);
  }

  async expectSaveAndNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.saveAndNew), count, timeoutMs);
  }

  async scrollSaveAndNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async longPressSaveEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

  async expectSaveEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.saveEdit), expected, timeoutMs);
  }

  async expectSaveEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.saveEdit), substring, timeoutMs);
  }

  async expectSaveEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.saveEdit), value, timeoutMs);
  }

  async expectSaveEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.saveEdit), count, timeoutMs);
  }

  async scrollSaveEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

}
