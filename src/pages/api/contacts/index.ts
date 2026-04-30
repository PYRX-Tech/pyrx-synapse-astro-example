import type { APIRoute } from 'astro';
import { synapse } from '../../../lib/synapse';
export const GET: APIRoute = async ({ url }) => { return Response.json(await synapse.contacts.list({ page: Number(url.searchParams.get('page')) || 1, limit: Number(url.searchParams.get('limit')) || 20 })); };
