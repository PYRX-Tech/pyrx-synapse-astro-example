import type { APIRoute } from 'astro';
import { synapse } from '../../../lib/synapse';
export const GET: APIRoute = async ({ params }) => Response.json(await synapse.templates.get(params.slug!));
export const PUT: APIRoute = async ({ params, request }) => Response.json(await synapse.templates.update(params.slug!, await request.json()));
export const DELETE: APIRoute = async ({ params }) => { await synapse.templates.delete(params.slug!); return Response.json({ success: true }); };
