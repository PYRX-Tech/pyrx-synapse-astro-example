import { Synapse } from '@pyrx/synapse';
export const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech", apiKey: import.meta.env.SYNAPSE_API_KEY, workspaceId: import.meta.env.SYNAPSE_WORKSPACE_ID });
