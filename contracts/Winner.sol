// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Winner {
    address payable owner;
    address deployedaddress;
    constructor(address temp) {
          owner = payable(msg.sender);
          deployedaddress = temp;
    }

    function pickwinner() external payable mode{
        (bool s, ) = deployedaddress.call(abi.encodeWithSignature("attempt()"));
        require(s);
    }

    modifier mode {
        require(msg.sender == owner);
        _;
    }
}
