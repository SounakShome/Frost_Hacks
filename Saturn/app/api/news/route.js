import { NextResponse } from 'next/server';
import * as fs from 'fs/promises';  // Import the 'fs.promises' module directly

export async function GET(request) {
  let blog = [];
  let content;

  try {
    const files = await fs.readdir('./newsdata');
    for (const item of files) {
      content = await fs.readFile(`./newsdata/${item}`, { encoding: 'utf8' });
      blog.push(JSON.parse(content));
    }
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error('Error reading files:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
