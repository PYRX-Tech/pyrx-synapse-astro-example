import type { APIRoute } from 'astro';
import { synapse } from '../../../lib/synapse';
export const GET: APIRoute = async () => Response.json(await synapse.templates.list());
export const POST: APIRoute = async ({ request }) => Response.json(await synapse.templates.create(await request.json()));
