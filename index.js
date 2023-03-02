async function connect() {
    if (window.ethereum !== undefined) {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        document.getElementById("connectButton").innerHTML = "Connected!"
    } else {
        document.getElementById("connectButton").innerHTML = "Please install Metamask!"
    }
}