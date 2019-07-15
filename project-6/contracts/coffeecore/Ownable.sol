pragma solidity ^0.5.8;

import { SupplyChain } from "../coffeebase/SupplyChain.sol";

/// Provides basic authorization control
contract Ownable is SupplyChain {
    address private origOwner;

    event TransferOwnership(address indexed oldOwner, address indexed newOwner);

    /// Assign the contract to an owner
    constructor () internal {
        origOwner = msg.sender;
        emit TransferOwnership(address(0), origOwner);
    }

    /// Look up the address of the owner
    function contractOwner() public view returns (address) {
        return origOwner;
    }

    /// Define a function modifier 'onlyOwner'
    modifier onlyContractOwner() {
        require(isContractOwner(), 'Only the contract owner has the permission to do this');
        _;
    }

    /// Check if the calling address is the owner of the contract
    function isContractOwner() public view returns (bool) {
        return msg.sender == origOwner;
    }

    /// Define a function to renounce ownerhip
    function renounceOwnership() public onlyContractOwner() {
        emit TransferOwnership(origOwner, address(0));
        origOwner = address(0);
    }

    /// Define a public function to transfer ownership
    function transferOwnership(address newOwner) public onlyContractOwner() {
        _transferOwnership(newOwner);
    }

    /// Define an internal function to transfer ownership
    function _transferOwnership(address newOwner) internal {
        require(newOwner != address(0), 'Provide valid address');
        emit TransferOwnership(origOwner, newOwner);
        origOwner = newOwner;
    }
}
