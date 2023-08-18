import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

const callMongooseConnect = async () => {
  await mongooseConnect();
};
callMongooseConnect();

export async function POST(request) {
  const body = await request.json();
  const { title, description, price } = body;
  const productDoc = await Product.create({ title, description, price });
  return NextResponse.json(productDoc);
}

export async function GET(request) {
  const id = request?.nextUrl?.searchParams?.get("id");
  if (id)
    return NextResponse.json(
      await Product.find({ _id: request.nextUrl.searchParams.get("id") })
    );
  else return NextResponse.json(await Product.find({}));
}

export async function PUT(request) {
  const body = await request.json();
  const { _id, title, description, price } = body;
  await Product.updateOne({ _id }, { title, description, price });
  return NextResponse.json(true);
}

export async function DELETE(request) {
  const id = request?.nextUrl?.searchParams?.get("id");
  await Product.deleteOne({ _id: id });
  return NextResponse.json(true);
}
