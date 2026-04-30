import { Synapse } from '@pyrx/synapse';
export const synapse = new Synapse({ apiKey: import.meta.env.SYNAPSE_API_KEY, workspaceId: import.meta.env.SYNAPSE_WORKSPACE_ID });
