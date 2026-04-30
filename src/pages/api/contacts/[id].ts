import type { APIRoute } from 'astro';
import { synapse } from '../../../lib/synapse';
export const GET: APIRoute = async ({ params }) => Response.json(await synapse.contacts.get(params.id!));
export const PUT: APIRoute = async ({ params, request }) => Response.json(await synapse.contacts.update(params.id!, await request.json()));
export const DELETE: APIRoute = async ({ params }) => { await synapse.contacts.delete(params.id!); return Response.json({ success: true }); };
