// Archived from tests/jira-imported/scrum-6-us-001-create-lead.spec.ts (test case 8d6be53f-3fd5-4174-98d7-ad16bdf2c899)
import { test, expect } from '@support/fixtures';

test('Validation errors when both Last Name and Company are empty', { tag: ["@edgecase","@regression","@P0","@case-8d6be53f-3fd5-4174-98d7-ad16bdf2c899"] }, async ({ page, homePage, leadPipelineInspectionPage, leadNewPage }) => {
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

  await test.step('Click — Click Save', async () => {
    await leadNewPage.clickSaveEdit();
  });

  await test.step('Assert count — Two required field errors shown', async () => {
    await leadNewPage.expectCompleteThisFieldErrorCount(2);
  });

  await test.step('Assert visible — Still on New Lead form', async () => {
    await leadNewPage.expectSaveEditVisible();
  });
});
