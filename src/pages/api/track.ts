import type { APIRoute } from 'astro';
import { Synapse } from '@pyrx/synapse';

const synapse = new Synapse({
  apiKey: import.meta.env.SYNAPSE_API_KEY,
  workspaceId: import.meta.env.SYNAPSE_WORKSPACE_ID,
});

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const email = form.get('email') as string;

  await synapse.track({ externalId: email, eventName: 'user_signed_up', attributes: { source: 'astro_form' } });

  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
};
