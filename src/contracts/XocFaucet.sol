// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.23;

import {IERC20} from "./interfaces/IERC20.sol";

contract XocFaucet {
    /// events
    event Dripped(address indexed user);
    event TimedOutUntil(address indexed user, uint256 timestamp);

    IERC20 public xocolatl;

    uint256 public constant TIME_OUT = 86400;

    uint256 public constant FAUCET_DRIP = 1_250 ether;

    // user address => time when to claim again.
    mapping(address => uint256) public timeOuts;

    /// custom errors
    error XocFaucet_invalidInput();
    error XocFaucet_giveMeXoc_oneDripPerDay();
    error XocFaucet__dripUser_dryFaucet();

    constructor(address xocolatl_) {
        if (xocolatl_ == address(0)) {
            revert XocFaucet_invalidInput();
        }
        xocolatl = IERC20(xocolatl_);
    }

    function dripMeXoc() public {
        uint256 backToDripping = timeOuts[msg.sender];
        if (block.timestamp > backToDripping) {
            _dripUser(msg.sender);
            _setTimeOut(msg.sender);
        } else {
            revert XocFaucet_giveMeXoc_oneDripPerDay();
        }
    }

    function _dripUser(address user) private {
        if (xocolatl.balanceOf(address(this)) < FAUCET_DRIP) {
            revert XocFaucet__dripUser_dryFaucet();
        }
        xocolatl.transfer(user, FAUCET_DRIP);

        emit Dripped(msg.sender);
    }

    function _setTimeOut(address user) private {
        uint256 backForDripping = block.timestamp + 1 days;
        timeOuts[msg.sender] = backForDripping;
        emit TimedOutUntil(user, backForDripping);
    }
}
