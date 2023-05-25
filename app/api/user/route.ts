import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

export async function GET(req: Request) {
    return NextResponse.json('get')
}

export async function POST(req: Request) {
    return NextResponse.json('post')
}

export async function PUT(req: Request) {
    return NextResponse.json('put')
}

export async function DELETE(req: Request) {
    return NextResponse.json('delete')
}