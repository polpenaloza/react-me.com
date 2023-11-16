/* eslint-disable camelcase */
// Import the necessary classes from the OpenAI package
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

// Create a new Configuration object with the API key from the environment variables
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
})

// Define the default export as an asynchronous function handling an HTTP request and response
export async function POST(req: Request) {
  if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
    return NextResponse.json(
      {
        errorMessage: `Missing NEXT_PUBLIC_OPENAI_API_KEY environment variable.
        If you're running locally, please ensure you have a ./.env file with a value for NEXT_PUBLIC_OPENAI_API_KEY=your-key.
        If you're running in Netlify, make sure you've configured env variable NEXT_PUBLIC_OPENAI_API_KEY.`,
      },
      {
        status: 500,
        headers: new Headers({
          'content-type': 'application/json',
        }),
      }
    )
  }

  try {
    const message: string = await req.json()

    const completion = await openai.chat.completions.create({
      model: 'davinci-002',
      max_tokens: 150,
      messages: [{ role: 'user', content: message }],
    })

    // Get the first choice's text from the completion response
    const openaiResponse = completion.choices[0].message

    return new Response(JSON.stringify({ response: openaiResponse }), {
      status: 200,
    })
  } catch (error) {
    console.error('Error fetching openai response:', error)
    return new Response(JSON.stringify({ error }), {
      status: 500,
    })
  }
}
