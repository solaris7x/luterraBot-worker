import * as ed from "@noble/ed25519"

const verifySignature = async (
  signature: string,
  timestamp: string,
  body: string
) => {
  const message = new TextEncoder().encode(timestamp + body)
  console.log(signature, message, DISCORD_PUBLIC_KEY)
  const isVerified = await ed.verify(signature, message, DISCORD_PUBLIC_KEY)
  return isVerified
}

export default verifySignature
