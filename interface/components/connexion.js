import { principal } from "../stores"
import { daoActor } from "../stores"
import { idlFactory as idlFactoryDAO } from "../../src/declarations/dao/dao.did.js"

//TODO : Add your mainnet id whenever you have deployed on the IC
const daoCanisterId = 
  process.env.NODE_ENV === "development" ? "r7inp-6aaaa-aaaaa-aaabq-cai" : "r4mib-6yaaa-aaaaj-qaztq-cai"

// See https://docs.plugwallet.ooo/ for more informations
// This code is not clean but does the job
// The documentation recommends to use the official methods to create the agent and not rely on the libraries from dfinity
// But: local dev is broken if I use the official methods...
export async function plugConnection() {
  const result = await window.ic.plug.requestConnect({
    whitelist: [daoCanisterId],
  })

  const p = window.ic.plug.agent.getPrincipal()
  const actor = await window.ic.plug.createActor({
    canisterId: daoCanisterId,
    interfaceFactory: idlFactoryDAO,
  })

  principal.update(() => p)
  daoActor.update(() => actor)
}