import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = {
    message: "hello",
    data: "todo test",
  };

  return NextResponse.json(response, { status: 200 });
}
