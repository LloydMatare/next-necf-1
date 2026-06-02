import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

export const runtime = 'nodejs'; // ✅ The only required config

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    if (file.size > 60 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size exceeds 60MB limit' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const isDocument = file.type === 'application/pdf' ||
      file.type.startsWith('application/vnd') ||
      file.type === 'application/msword' ||
      file.type === 'application/zip' ||
      file.type === 'application/x-rar-compressed';

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: isDocument ? 'raw' : 'auto',
          folder: 'necf',
          chunk_size: 60 * 1024 * 1024,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      ).end(buffer);
    });

    return NextResponse.json({
      success: true,
      url: (result as any).secure_url,
      size: file.size,
      type: file.type,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
