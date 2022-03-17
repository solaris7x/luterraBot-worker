import {
  APIInteractionResponse,
  InteractionResponseType,
  InteractionType,
  MessageFlags,
} from "discord-api-types/v10"

import beep from "./commands/beep"
import verifySignature from "./utils/verifySignature"

export async function handleRequest(request: Request): Promise<Response> {
  try {
    // Check if the request type is POST
    if (request.method !== "POST") {
      return new Response("Need a Post request", { status: 405 })
    }
    // Parse request body
    const body = await request.json<any>()
    console.log(body)

    // Verify signature
    if (
      !(await verifySignature(
        request.headers.get("x-signature-ed25519") || "",
        request.headers.get("x-signature-timestamp") || "",
        JSON.stringify(body)
      ))
    ) {
      console.log("Signature invalid")
      return new Response("Signature invalid", { status: 401 })
    }
    console.log("Signature verified")

    // Check if request is ping
    if (body?.type === InteractionType.Ping) {
      return new Response(
        JSON.stringify({
          type: InteractionResponseType.Pong,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }

    // Generic response
    let interactionRes: APIInteractionResponse = {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        tts: false,
        content: "💀🗺️ Beep Boop, Maps not working 🗺️💀",
        flags: MessageFlags.Ephemeral,
        embeds: [],
        allowed_mentions: { parse: [] },
      },
    }

    // Check if request is command
    if (body?.type === InteractionType.ApplicationCommand) {
      // Check if command is beep
      if (body?.data?.name === "beep") {
        interactionRes = beep(null)
      }
    }

    // Send response
    return new Response(JSON.stringify(interactionRes), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })

    // End of try block
  } catch (err: any) {
    console.log("Something Broke", err?.message)
    return new Response(
      JSON.stringify({
        "request method": request.method,
        msg: "Something Broke",
        error: err?.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
}
