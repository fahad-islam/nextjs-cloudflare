import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ ok: true }, { status: 200 });
}

export const runtime = "edge"; // 'nodejs' (default) | 'edge'
