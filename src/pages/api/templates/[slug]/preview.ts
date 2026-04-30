import type { APIRoute } from 'astro';
import { synapse } from '../../../../lib/synapse';
export const POST: APIRoute = async ({ params, request }) => { const { attributes } = await request.json(); return Response.json(await synapse.templates.preview(params.slug!, { attributes })); };
