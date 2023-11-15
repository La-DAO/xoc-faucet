// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {XocFaucet} from '../src/contracts/XocFaucet.sol';

contract DeployFacetScript is Script {

    address constant XOCOLATL_STABLECOIN = 0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf;
    function setUp() public {}

    function run() public {
        vm.broadcast();
        new XocFaucet(XOCOLATL_STABLECOIN);
    }
}
