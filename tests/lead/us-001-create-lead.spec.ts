import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('Create Lead with mandatory fields — verify default status and redirect', { tag: ["@smoke","@functional","@regression","@P0","@case-4b7ea150-4eb4-4d40-8e0f-6ae37951a74a"] }, async ({ page, homePage, leadPipelineInspectionPage, leadNewPage, leadRecordPage }) => {
  await test.step('Open — Open Salesforce org base URL', async () => {
    await page.goto('https://orgfarm-cdb7bbd1fc-dev-ed.develop.my.salesforce.com');
  });

  await test.step('Click — Navigate to Leads tab from Home', async () => {
    await homePage.clickLeads();
  });

  await test.step('Click — Switch to list view', async () => {
    await leadPipelineInspectionPage.clickPipelineInspectionToListView();
  });

  await test.step('Assert visible — Verify Leads list view is visible (New button present)', async () => {
    await leadPipelineInspectionPage.expectNewVisible();
  });

  await test.step('Click — Click New to open New Lead form', async () => {
    await leadPipelineInspectionPage.clickNew();
  });

  await test.step('Assert visible — Verify Last Name field is visible on New Lead form', async () => {
    await leadNewPage.expectLastNameVisible();
  });

  const uniqueSuffix = ` ${Math.random().toString(36).slice(2, 8)}`;

  await test.step('Fill — Enter Last Name (mandatory)', async () => {
    await leadNewPage.fillLastName(testData.createLeadWithMandatoryFieldsVerifyDefaultStatusAndRedirect.enterLastNameMandatory + uniqueSuffix);
  });

  await test.step('Fill — Enter Company (mandatory)', async () => {
    await leadNewPage.fillCompany(testData.createLeadWithMandatoryFieldsVerifyDefaultStatusAndRedirect.enterCompanyMandatory + uniqueSuffix);
  });

  await test.step('Click — Save Lead', async () => {
    await leadNewPage.clickSaveEdit();
  });

  await test.step('Assert contains — Verify redirected to Lead record page with header showing lead name', async () => {
    await leadRecordPage.expectRecordHeaderContainsText(testData.createLeadWithMandatoryFieldsVerifyDefaultStatusAndRedirect.enterLastNameMandatory + uniqueSuffix);
  });

  await test.step('Assert contains — Verify default Lead Status is \'Open - Not Contacted\' on record page', async () => {
    await leadRecordPage.expectLeadStatusContainsText('Open - Not Contacted');
  });
});

test('Navigate to Leads tab — list view loads and New button visible', { tag: ["@functional","@regression","@P1","@case-f5fbdfd6-f717-4a8f-b947-778a7baf0bb2"] }, async ({ page, homePage, leadPipelineInspectionPage }) => {
  await test.step('Open — Open Salesforce org base URL', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Click — Navigate to Leads tab from Home', async () => {
    await homePage.clickLeads();
  });

  await test.step('Click — Switch to list view', async () => {
    await leadPipelineInspectionPage.clickPipelineInspectionToListView();
  });

  await test.step("Assert visible — Verify Leads list 'My Leads' is visible", async () => {
    await leadPipelineInspectionPage.expectMyLeadsVisible();
  });

  await test.step('Assert visible — Verify New button is visible on Leads list view', async () => {
    await leadPipelineInspectionPage.expectNewVisible();
  });
});

test('Open New Lead form — mandatory fields and Save button visible', { tag: ["@functional","@regression","@P1","@case-95888669-6a7b-4f3d-9cae-1472f41f825a"] }, async ({ page, homePage, leadPipelineInspectionPage, leadNewPage }) => {
  await test.step('Open — Open Salesforce org base URL', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Click — Navigate to Leads tab from Home', async () => {
    await homePage.clickLeads();
  });

  await test.step('Click — Switch to list view', async () => {
    await leadPipelineInspectionPage.clickPipelineInspectionToListView();
  });

  await test.step('Click — Click New to open New Lead form', async () => {
    await leadPipelineInspectionPage.clickNew();
  });

  await test.step('Assert visible — Verify Last Name field is visible (mandatory)', async () => {
    await leadNewPage.expectLastNameVisible();
  });

  await test.step('Assert visible — Verify Company field is visible (mandatory)', async () => {
    await leadNewPage.expectCompanyVisible();
  });

  await test.step('Assert visible — Verify Save button is visible', async () => {
    await leadNewPage.expectSaveEditVisible();
  });
});

  test('Create Lead with optional fields — values persist on record page', { tag: ["@functional","@regression","@P1","@case-07b3fc8d-18e6-4733-a506-8d4ce235f987"] }, async ({ page, homePage, leadPipelineInspectionPage, leadNewPage, leadRecordPage }) => {
    await test.step('Open — Open Salesforce org base URL', async () => {
      await page.goto(env.baseURL);
    });

    await test.step('Click — Navigate to Leads tab from Home', async () => {
      await homePage.clickLeads();
    });

    await test.step('Click — Switch to list view', async () => {
      await leadPipelineInspectionPage.clickPipelineInspectionToListView();
    });

    await test.step('Click — Click New to open New Lead form', async () => {
      await leadPipelineInspectionPage.clickNew();
    });

    const uniqueSuffix = ` ${Math.random().toString(36).slice(2, 8)}`;

    await test.step('Fill — Enter First Name (optional)', async () => {
      await leadNewPage.fillFirstName(testData.createLeadWithOptionalFieldsValuesPersistOnRecordPage.enterFirstNameOptional);
    });

    await test.step('Fill — Enter Last Name (mandatory)', async () => {
      await leadNewPage.fillLastName(testData.createLeadWithOptionalFieldsValuesPersistOnRecordPage.enterLastNameMandatory + uniqueSuffix);
    });

    await test.step('Fill — Enter Company (mandatory)', async () => {
      await leadNewPage.fillCompany(testData.createLeadWithOptionalFieldsValuesPersistOnRecordPage.enterCompanyMandatory + uniqueSuffix);
    });

    await test.step('Fill — Enter Phone (optional)', async () => {
      await leadNewPage.fillPhone(testData.createLeadWithOptionalFieldsValuesPersistOnRecordPage.enterPhoneOptional);
    });

    await test.step('Click — Save Lead', async () => {
      await leadNewPage.clickSaveEdit();
    });

    await test.step('Assert contains — Verify record header shows full name', async () => {
      const fullName = `${testData.createLeadWithOptionalFieldsValuesPersistOnRecordPage.enterFirstNameOptional} ${testData.createLeadWithOptionalFieldsValuesPersistOnRecordPage.enterLastNameMandatory}${uniqueSuffix}`;
      await leadRecordPage.expectRecordHeaderContainsText(fullName);
    });
  });
