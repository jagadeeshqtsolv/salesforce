// Archived from tests/jira-imported/scrum-6-us-001-create-lead.spec.ts (test case f9576927-43f4-4081-b1ab-e594ea9b9053)
import { test, expect } from '@support/fixtures';

test('Validation error when Last Name is empty', { tag: ["@edgecase","@regression","@P0","@case-f9576927-43f4-4081-b1ab-e594ea9b9053"] }, async ({ page, homePage, leadPipelineInspectionPage, leadNewPage }) => {
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

  await test.step('Fill — Enter Company (required)', async () => {
    await leadNewPage.fillCompany(testData.validationErrorWhenLastNameIsEmpty.enterCompanyRequired);
  });

  await test.step('Click — Click Save', async () => {
    await leadNewPage.clickSaveEdit();
  });

  await test.step('Assert contains — Field-level error for Last Name', async () => {
    await leadNewPage.expectLastNameContainsText('Complete this field.');
  });

  await test.step('Assert visible — Still on New Lead form', async () => {
    await leadNewPage.expectLastNameVisible();
  });
});
