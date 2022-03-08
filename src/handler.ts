import verifySignature from "./utils/verifySignature"

export async function handleRequest(request: Request): Promise<Response> {
  try {
    // Check if the request type is POST
    if (request.method !== "POST") {
      return new Response("Need a Post request", { status: 405 })
    }
    // Parse request body
    const body = await request.json<any>()

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
    if (body?.type === 1) {
      return new Response(
        JSON.stringify({
          type: 1,
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
    return new Response(
      JSON.stringify({
        body,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

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
