// migrating the appropriate contracts
// var Roles = artifacts.require("./coffeeaccesscontrol/Roles.sol");
// var FarmerRole = artifacts.require("./coffeeaccesscontrol/FarmerRole.sol");
// var DistributorRole = artifacts.require("./coffeeaccesscontrol/DistributorRole.sol");
// var RetailerRole = artifacts.require("./coffeeaccesscontrol/RetailerRole.sol");
// var ConsumerRole = artifacts.require("./coffeeaccesscontrol/ConsumerRole.sol");
var SupplyChain = artifacts.require("./coffeebase/SupplyChain.sol");
// var Ownable = artifacts.require("./coffeecore/Ownable.sol");

module.exports = function(deployer) {
  // deployer.deploy(Roles);
  // deployer.deploy(FarmerRole);
  // deployer.deploy(DistributorRole);
  // deployer.deploy(RetailerRole);
  // deployer.deploy(ConsumerRole);
  deployer.deploy(SupplyChain);
  // deployer.deploy(Ownable);
};
