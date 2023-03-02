// in nodejs
// require()

// in front-end js you cant use require
// import
import { ethers } from "./ethers-5.6.esm.min.js"
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

console.log(ethers)

async function connect() {
    if (window.ethereum !== undefined) {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        connectButton.innerHTML = "Connected!"
    } else {
        connectButton.innerHTML = "Please install Metamask!"
    }
}

async function fund() {
    const ethAmount = "0.1"
    console.log(`Funding with ${ethAmount}...`)
    if (window.ethereum !== undefined) {
        // provider / connection to the Blockchain
        // signer / wallet / someone with some gas

        // contract that we are interacting with
        // ^ ABI & Address
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        console.log(signer)
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.fund({
                value: ethers.utils.parseEther(ethAmount)
            })
        } catch(error) {
            console.log(error)
        }
    }
}

// fund function

// withdraw