// Auto-generated — shared Salesforce SOQL helpers for generated db/<Group>.ts classes. Do not edit by hand.
import { Connection } from 'jsforce';
import { createSign } from 'node:crypto';

export function getByPath(obj: unknown, path: string): unknown {
  const parts = path.replace(/\[(\d+)\]/g, ".$1").split(".").filter((p) => p.length > 0);
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur === null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return cur;
}

function base64url(input: Buffer): string {
  return input.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function signJwtAssertion(clientId: string, username: string, audience: string, privateKeyPem: string): string {
  const header = base64url(Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' }), 'utf8'));
  const now = Math.floor(Date.now() / 1000);
  const payload = base64url(Buffer.from(JSON.stringify({ iss: clientId, sub: username, aud: audience, exp: now + 300 }), 'utf8'));
  const signingInput = `${header}.${payload}`;
  const signature = createSign('RSA-SHA256').update(signingInput).sign(privateKeyPem);
  return `${signingInput}.${base64url(signature)}`;
}

/** Escapes a value into a SOQL literal — never string-interpolates a raw value into SOQL text (no bind-parameter protocol exists for it, unlike SQL's "?"). */
export function bindSoqlLiteral(value: string): string {
  if (/^-?\d+(\.\d+)?$/.test(value)) return value;
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

export function bindParams(
  queryText: string,
  vars: Record<string, string>,
  env: Record<string, unknown>,
): { text: string } {
  const text = queryText.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (match, token: string) => {
    const value = token.startsWith("env.") ? getByPath(env, token.slice(4)) : vars[token];
    return bindSoqlLiteral(value === undefined ? "" : String(value));
  });
  return { text };
}

const connections = new Map<string, Promise<Connection>>();

/** Lazily authenticates (JWT bearer flow) and reuses a Connection per active connection — sourced from execution/.env.database, never from literals in generated code. Re-authenticates on the next call if the prior attempt failed. */
export function getConnection(envPrefix: string): Promise<Connection> {
  const existing = connections.get(envPrefix);
  if (existing) return existing;
  const promise = (async () => {
    const loginUrl = (process.env[`${envPrefix}LOGIN_URL`] ?? '').replace(/\/$/, '');
    const clientId = process.env[`${envPrefix}CLIENT_ID`] ?? '';
    const username = process.env[`${envPrefix}USERNAME`] ?? '';
    const apiVersion = process.env[`${envPrefix}API_VERSION`] ?? '61.0';
    const isSandbox = process.env[`${envPrefix}IS_SANDBOX`] === 'true';
    const privateKeyPem = Buffer.from(process.env[`${envPrefix}PRIVATE_KEY_B64`] ?? '', 'base64').toString('utf8');
    const audience = isSandbox ? 'https://test.salesforce.com' : 'https://login.salesforce.com';
    const assertion = signJwtAssertion(clientId, username, audience, privateKeyPem);

    const res = await fetch(`${loginUrl}/services/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
    });
    const json = await res.json();
    if (!res.ok || !json.access_token) {
      throw new Error(json.error_description ?? json.error ?? 'Salesforce authentication failed');
    }
    return new Connection({ instanceUrl: json.instance_url, accessToken: json.access_token, version: apiVersion });
  })();
  // A failed auth must not be cached forever — the next DB step gets a fresh attempt.
  promise.catch(() => connections.delete(envPrefix));
  connections.set(envPrefix, promise);
  return promise;
}
