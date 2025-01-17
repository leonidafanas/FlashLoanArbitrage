const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const Dex = await hre.ethers.getContractFactory("Dex");
  const dex = await Dex.deploy();

  await dex.waitForDeployment();

  console.log("Dex contract deployed: ", dex.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
