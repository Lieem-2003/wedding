import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Wish from '@/models/Wish'

/* ================= GET: lấy danh sách lời chúc ================= */
export async function GET() {
  try {
    await dbConnect()

    const wishes = await Wish
      .find()
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({ wishes })
  } catch (error) {
    console.error('GET /api/wishes error:', error)
    return NextResponse.json(
      { message: 'Không lấy được lời chúc' },
      { status: 500 }
    )
  }
}

/* ================= POST: lưu lời chúc ================= */
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, relation, message } = body

    if (!name || !message) {
      return NextResponse.json(
        { message: 'Thiếu dữ liệu' },
        { status: 400 }
      )
    }

    await dbConnect()

    const newWish = await Wish.create({
      name,
      relation,
      message
    })

    return NextResponse.json({ wish: newWish })
  } catch (error) {
    console.error('POST /api/wishes error:', error)
    return NextResponse.json(
      { message: 'Không lưu được lời chúc' },
      { status: 500 }
    )
  }
}
