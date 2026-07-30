// Archived from tests/jira-imported/scrum-6-us-001-create-lead.spec.ts (test case ddb902b9-08ef-406a-b147-9113ad089f3c)
import { test, expect } from '@support/fixtures';

test('Validation error when Company is empty', { tag: ["@edgecase","@regression","@P0","@case-ddb902b9-08ef-406a-b147-9113ad089f3c"] }, async ({ page, homePage, leadPipelineInspectionPage, leadNewPage }) => {
  await test.step('Open — Open app home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Click — Go to Leads tab', async () => {
    await homePage.clickLeads();
  });

  await test.step('Assert visible — Leads list visible', async () => {
    await leadPipelineInspectionPage.expectNewVisible();
  });

  await test.step('Click — Click New', async () => {
    await leadPipelineInspectionPage.clickNew();
  });

  await test.step('Fill — Enter Last Name (required)', async () => {
    await leadNewPage.fillLastName(testData.validationErrorWhenCompanyIsEmpty.enterLastNameRequired);
  });

  await test.step('Click — Click Save', async () => {
    await leadNewPage.clickSaveEdit();
  });

  await test.step('Assert contains — Field-level error for Company', async () => {
    await leadNewPage.expectCompanyContainsText('Complete this field.');
  });

  await test.step('Assert visible — Still on New Lead form', async () => {
    await leadNewPage.expectCompanyVisible();
  });
});
