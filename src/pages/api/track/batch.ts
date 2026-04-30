import type { APIRoute } from 'astro';
import { synapse } from '../../../lib/synapse';
export const POST: APIRoute = async ({ request }) => { const { events } = await request.json(); return Response.json(await synapse.trackBatch({ events })); };
