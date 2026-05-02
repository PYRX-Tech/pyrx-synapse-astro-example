import type { APIRoute } from 'astro';
import { synapse } from '../../../lib/synapse';
export const POST: APIRoute = async ({ request }) => {
  try {
    const b = await request.json();
    return Response.json(await synapse.send({ templateSlug: b.templateSlug, to: b.to, attributes: b.attributes }));
  } catch (e: any) {
    const status = e.status || e.statusCode || 500;
    return new Response(JSON.stringify({ error: e.message, status }), { status, headers: { 'Content-Type': 'application/json' } });
  }
};
