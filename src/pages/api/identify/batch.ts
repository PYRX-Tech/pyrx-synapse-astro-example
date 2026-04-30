import type { APIRoute } from 'astro';
import { synapse } from '../../../lib/synapse';
export const POST: APIRoute = async ({ request }) => { const { contacts } = await request.json(); return Response.json(await synapse.identifyBatch({ contacts })); };
