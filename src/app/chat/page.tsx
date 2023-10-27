'use client'

import { useChannel } from 'ably/react'
import Image from 'next/image'
import React, { SyntheticEvent, useState } from 'react'

import { useIsMounted } from '~/core/hooks/useIsMounted'
import { logger } from '~/core/logger'

import { generateRandomInitials } from './randomColors'

const log = logger('chatbox')

interface Message {
  clientId: string
  connectionId: string
  data: string
  id: string
  name: string
  timestamp: number
}

export default function ChatBox() {
  let messageEnd: HTMLDivElement | null = null

  /** @states */
  const [messageText, setMessageText] = useState('')
  const [fetchingopenaiResponse, setFetchingopenaiResponse] = useState(false)
  const [receivedMessages, setMessages] = useState([] as Message[])
  const messageTextIsEmpty = messageText.trim().length === 0
  // Generate a random user color and initials.
  const [userColor] = useState(
    '#' + Math.floor(Math.random() * 16777215).toString(16)
  )
  const [userInitials] = useState(generateRandomInitials())

  /** @hooks */
  const { channel, ably } = useChannel('chat-demo', (message: Message) => {
    setMessages((history) => [...history, message])
  })

  // Determine if a message should trigger an OpenAI response.
  const isopenaiTrigger = (message: string) => {
    return message.startsWith('Hey OpenAI')
  }

  /** @methods */

  // Send an OpenAI response.
  const sendopenaiResponse = async (messageText: string) => {
    try {
      setFetchingopenaiResponse(true)

      const response = await fetch('/api/openai', {
        method: 'POST',
        body: JSON.stringify({ message: messageText }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const data = await response.json()

      // Extract the openaiResponse from the data object
      const openaiResponse = 'OpenAI: ' + data.response

      channel.publish({
        name: 'chat-message',
        data: {
          text: openaiResponse,
          color: userColor,
          initials: userInitials,
        },
      })
    } catch (error) {
      console.error('Error fetching openai response:', error)
    } finally {
      setFetchingopenaiResponse(false)
    }
  }
  // Send a chat message and trigger OpenAI response if applicable.
  const sendChatMessage = async (messageText: string) => {
    // Publish the original message to the channel first.
    channel.publish({
      name: 'chat-message',
      data: messageText,
    })

    if (isopenaiTrigger(messageText)) {
      await sendopenaiResponse(messageText)
    }

    setMessageText('')
  }

  const handleFormSubmission = (event: SyntheticEvent) => {
    event.preventDefault()
    sendChatMessage(messageText)
  }

  const messages = receivedMessages
    .map((message, index) => {
      if (!message.data) return null
      const author =
        message.connectionId === ably.connection.id ? 'me' : 'other'

      const sendAt = new Date(message.timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })

      const seenAt = new Date(message.timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })

      return (
        <div key={index} className={'styles.message'} data-author={author}>
          {author !== 'me' ? (
            <div className='chat chat-start'>
              <div className='avatar chat-image'>
                <div className='w-10 rounded-full'>
                  <Image
                    src='/images/vader.jpg'
                    width={100}
                    height={100}
                    alt='vader'
                  />
                </div>
              </div>
              <div className='chat-header'>
                Anakin
                <time className='text-xs opacity-50'> {sendAt}</time>
              </div>
              <div className='chat-bubble'>{message.data}</div>
              {/* <div className='chat-footer opacity-50'>Seen at {seenAt}</div> */}
            </div>
          ) : (
            <div className='chat chat-end'>
              <div className='avatar chat-image'>
                <div className='w-10 rounded-full'>
                  <Image
                    src='/images/luke.jpeg'
                    width={100}
                    height={100}
                    alt='luke'
                  />
                </div>
              </div>
              <div className='chat-header'>
                Luke Skywalker
                <time className='pl-2 text-xs opacity-50'>{seenAt}</time>
              </div>
              <div className='chat-bubble'>{message.data}</div>
              <div className='chat-footer opacity-50'>Delivered</div>
            </div>
          )}
        </div>
      )
    })
    .filter(Boolean)

  useIsMounted(() => {
    messageEnd && messageEnd.scrollIntoView({ behavior: 'smooth' })
  })

  useIsMounted(() => {
    /* Subscribe to presence enter events */
    channel.presence.subscribe('enter', function (member: any) {
      log(member)
    })

    /* Subscribe to presence update events */
    channel.presence.subscribe('leave', function (member: any) {
      log(member)
    })
  })

  useIsMounted(() => {
    const fetchChannelHistory = async () => {
      try {
        const historyPage = await channel.history({ limit: 20 })
        const historyMessages = historyPage.items.reverse()

        if (historyMessages.length === 0) return
        setMessages((msgs) => [...msgs, ...historyMessages])
      } catch (error) {
        console.error('Error fetching channel history:', error)
      }
    }

    fetchChannelHistory()

    return function cleanup() {
      setMessages(() => [])
    }
  })

  return (
    <div className='mx-auto flex h-full w-full max-w-xl grow flex-col gap-2 rounded-lg border-2 border-base-100'>
      <div className='h-full w-full flex-1 grow overflow-y-auto rounded-lg border-2 border-base-content p-2'>
        {messages?.map((message, index) => {
          return <React.Fragment key={index}>{message}</React.Fragment>
        })}
        {fetchingopenaiResponse && (
          <span className='text-red-400'>Fetching response from OpenAI...</span>
        )}
        <div
          ref={(element) => {
            messageEnd = element
          }}
        ></div>
      </div>
      <form
        onSubmit={handleFormSubmission}
        className='form-control h-fit gap-2'
      >
        <input
          className='input input-bordered input-primary input-lg w-full'
          value={messageText}
          placeholder='Type a message...'
          onChange={(e) => setMessageText(e.target.value)}
        />
        <button
          type='submit'
          className='btn btn-primary btn-block'
          disabled={messageTextIsEmpty}
        >
          Send
        </button>
      </form>
    </div>
  )
}
