
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
    const url = process.env.GOERLI_URL;

    let artifacts = await hre.artifacts.readArtifact("Winner");
    const dep_addres = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
    const provider = new ethers.providers.JsonRpcProvider(url)

    const private_key = process.env.PRIVATE_KEY;

    let wallet = new ethers.Wallet(private_key, provider)

    let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

    let winner_contract = await factory.deploy(dep_addres)

    const deployed_address = winner_contract.address;
    console.log(deployed_address)
    await winner_contract.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
