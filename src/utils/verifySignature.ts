import * as ed from "@noble/ed25519"

const verifySignature = async (
  signature: string,
  timestamp: string,
  body: string,
  clientPublicKey: string
) => {
  const message = new TextEncoder().encode(timestamp + body)
  // console.log(signature, message, DISCORD_PUBLIC_KEY)
  const isVerified = await ed.verify(signature, message, clientPublicKey)
  return isVerified
}

export default verifySignature
