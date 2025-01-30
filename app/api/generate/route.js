import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { url, subdomain } = await req.json(); 

    const client = await clientPromise;
    const db = client.db("Linky");
    const collection = db.collection("URL Data");

    const existing = await collection.findOne({ subdomain });

    if (existing) {
      return NextResponse.json({ error: "Subdomain already exists" }, { status: 400 });
    }

    const result = await collection.insertOne({ url, subdomain });

    return NextResponse.json({ id: result.insertedId, url, subdomain }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
