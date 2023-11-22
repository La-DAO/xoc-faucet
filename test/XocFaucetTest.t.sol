// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {XocFaucet, IERC20} from "../src/contracts/XocFaucet.sol";
import {ERC20} from "../src/contracts/libraries/ERC20.sol";

contract XocFaucetTest is Test {
    uint256 constant LARGE_AMOUNT = 1_000_000 ether;
    ERC20 public xoc;
    XocFaucet public faucet;

    function setUp() public {
        xoc = new ERC20('Xocolatl MXN Stablecoin', 'XOC');
        faucet = new XocFaucet(address(xoc));
    }

    function test_firstTimedripMeXoc(address rando) public {
        vm.assume(rando != address(this) && rando != address(0));
        deal(address(xoc), address(faucet), LARGE_AMOUNT);
        vm.expectEmit();
        emit XocFaucet.Dripped(rando);
        emit XocFaucet.TimedOutUntil(rando, block.timestamp + 1 days);
        vm.prank(rando);
        faucet.dripMeXoc();
        assertEq(xoc.balanceOf(rando), faucet.FAUCET_DRIP());
        assertEq(faucet.timeOuts(rando), block.timestamp + 1 days);
    }

    function test_secondTimedripMeXoc(address rando) public {
        vm.assume(rando != address(this) && rando != address(0));
        test_firstTimedripMeXoc(rando);
        vm.expectRevert(XocFaucet.XocFaucet_giveMeXoc_oneDripPerDay.selector);
        vm.prank(rando);
        faucet.dripMeXoc();
        assertEq(xoc.balanceOf(rando), faucet.FAUCET_DRIP());
    }

    function test_afterTimeOutdripMeXoc(address rando) public {
        vm.assume(rando != address(this) && rando != address(0));
        test_firstTimedripMeXoc(rando);
        vm.warp(block.timestamp + 1 days + 1 seconds);
        vm.prank(rando);
        faucet.dripMeXoc();
        assertEq(xoc.balanceOf(rando), 2 * faucet.FAUCET_DRIP());
    }

    function test_driedOutdripMeXoc(address rando) public {
        vm.assume(rando != address(this) && rando != address(0));
        vm.expectRevert(XocFaucet.XocFaucet__dripUser_dryFaucet.selector);
        vm.prank(rando);
        faucet.dripMeXoc();
        assertEq(xoc.balanceOf(rando), 0);
        assertEq(faucet.timeOuts(rando), 0);
    }
}
