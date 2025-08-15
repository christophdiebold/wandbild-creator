export interface Env {
  // OPENAI_API_KEY: string; // später als Secret hinzufügen
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === "/api/health") {
      return Response.json({ ok: true, ts: new Date().toISOString() });
    }
    return new Response("Wandbild Worker up. Use /api/health", { status: 200 });
  }
};