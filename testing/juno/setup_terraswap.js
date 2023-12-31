import {Wallet,mnemonic} from "./wallet.js";
import {deployer, MintingContractPath} from "./constants.js";

// Setup
let wallet = new Wallet(mnemonic)
const sleepTime = 1500
const basePath = "../../artifacts/"
const factoryPath = basePath + "terraswap_factory.wasm"
const terraSwapTokenPath = basePath + "terraswap_token.wasm"
const swapPairPath = basePath + "terraswap_pair.wasm"
// Upload Terra Swap
let factory_code_id = await wallet.upload(factoryPath)
console.log(factory_code_id)
await wallet.sleep(sleepTime)
let token_code_id = await wallet.upload(terraSwapTokenPath)
console.log(token_code_id)
await wallet.sleep(sleepTime)
let pair_code_id = await wallet.upload(swapPairPath)
console.log(pair_code_id)
await wallet.sleep(sleepTime)
let minting_contract = await wallet.upload(MintingContractPath)
console.log(minting_contract)
await wallet.sleep(sleepTime)
// Init Factory
let factory_init_response = await wallet.init(factory_code_id, {
    "pair_code_id": pair_code_id,
    "token_code_id": token_code_id,
    "proxy_contract_addr": ""
})
console.log(factory_init_response)
await wallet.sleep(sleepTime)
let fury_init_response = await wallet.init(token_code_id, )
console.log(fury_init_response)