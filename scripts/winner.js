const { ethers } = require("hardhat");
const hre = require("hardhat");

const WinnerContractArtifact = require("../artifacts/contracts/Winner.sol/Winner.json")
const deployed_contract_address = "0xDFbe98C45864Ca60867D3a60Ca562F9933e569c1"



async function main() {
    const url = process.env.GOERLI_URL;
    
    // let abi = await hre.artifacts.readArtifact("EmitWinner");
  
    const provider = new ethers.providers.JsonRpcProvider(url);
  
    let privateKey = process.env.PRIVATE_KEY;


    let deployed_contract_abi = WinnerContractArtifact["abi"];
  
    let wallet = new ethers.Wallet(privateKey, provider);
  
    let contract_instance = new ethers.Contract(deployed_contract_address, deployed_contract_abi, wallet);
   
    const tx = await contract_instance.pickwinner();

    console.log(tx);
}



main().catch(err => {
    console.log("error")
    process.exitCode = 1;
})