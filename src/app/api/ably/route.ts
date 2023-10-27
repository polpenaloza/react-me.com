import * as Ably from 'ably/promises'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  if (!process.env.NEXT_PUBLIC_ABLY_KEY) {
    return NextResponse.json(
      {
        errorMessage: `Missing NEXT_PUBLIC_ABLY_KEY environment variable.
        If you're running locally, please ensure you have a ./.env file with a value for NEXT_PUBLIC_ABLY_KEY=your-key.
        If you're running in Netlify, make sure you've configured env variable NEXT_PUBLIC_ABLY_KEY.
        Please see README.md for more details on configuring your Ably API Key.`,
      },
      {
        status: 500,
        headers: new Headers({
          'content-type': 'application/json',
        }),
      }
    )
  }

  const clientId =
    (await req.formData()).get('clientId')?.toString() ||
    process.env.DEFAULT_CLIENT_ID ||
    'NO_CLIENT_ID'
  const client = new Ably.Rest(process.env.NEXT_PUBLIC_ABLY_KEY)
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: clientId,
  })

  console.log(tokenRequestData)
  return NextResponse.json(tokenRequestData)
}
