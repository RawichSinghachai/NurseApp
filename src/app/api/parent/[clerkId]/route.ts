import { NextResponse } from "next/server";
import { getParentAction } from "@/action/action";


export async function GET(
  request: Request,
  { params }: { params: Promise<{ clerkId: string }> }
) {
  try {
    const parent = await getParentAction((await params).clerkId);
    return NextResponse.json(parent);
  } catch (error) {
    return NextResponse.json({ error: `Failed to fetch parent data , error : ${error}` }, { status: 500 });
  }
}
