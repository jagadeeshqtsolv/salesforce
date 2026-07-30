// Auto-generated from saved DB query definitions — regenerated whenever "DbQueries" queries change. Do not edit by hand.
import env from '@support/env';
import { bindParams, getByPath, getConnection } from './_runtime.salesforce-soql';

export class DbQueries {
  async findLeads(vars: Record<string, string>): Promise<Record<string, string>> {
    const { text } = bindParams("SELECT Lead.FirstName, Lead.LastName, Lead.Salutation, Lead.Company, Lead.Id FROM Lead ORDER BY Lead.LastName ASC", vars, env);
    const conn = await getConnection("DB_ACTIVE_SALESFORCE_SOQL_DEFAULT_");
    const result = await conn.query(text);
    const row = result.records[0] as Record<string, unknown> | undefined;
    return {};
  }
}
