async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("Connected!");
  } else {
    console.log("No Metamask!");
  }
}
