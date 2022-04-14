pragma solidity >=0.4.21 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/FileActions.sol";

contract TestFileActions {
    function testItStoresAValue() public {
        FileActions fileActions = FileActions(DeployedAddresses.FileActions());

        fileActions.createFileAction(
            "Test",
            "Test",
            "Test",
            "Test",
            "Test",
            "Test",
            "Test"
        );

        uint256 expected = 1;

        Assert.equal(
            fileActions.fileMappingCount(),
            expected,
            "It should store the value 1."
        );
    }
}
