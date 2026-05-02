import type { APIRoute } from 'astro';
import { synapse } from '../../lib/synapse';
export const POST: APIRoute = async ({ request }) => { const b = await request.json(); return Response.json(await synapse.track({ externalId: b.userId, eventName: b.event, attributes: b.attributes })); };
