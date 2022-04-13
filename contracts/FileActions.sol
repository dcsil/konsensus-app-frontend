pragma solidity >=0.5.0;
pragma experimental ABIEncoderV2;

contract FileActions {
    mapping(string => FileAction[]) public fileMappings; // state variable
    uint256 public fileMappingCount;

    struct FileAction {
        // uint id;
        string fileId; // File Id should match Id in Konsensus Backend
        string fileName;
        string date;
        string userId; // User attributes
        string userName;
        string action;
        string role;
    }

    constructor() public {}

    function getAllFileActionsForFile(string memory _fileId)
        public
        view
        returns (FileAction[] memory)
    {
        return fileMappings[_fileId];
    }

    // Adds a new file action with fileId <id> and
    function createFileAction(
        string memory _fileId,
        string memory _fileName,
        string memory _date,
        string memory _userId,
        string memory _userName,
        string memory _action,
        string memory _role
    ) public {
        fileMappingCount++;
        fileMappings[_fileId].push(
            FileAction(
                _fileId,
                _fileName,
                _date,
                _userId,
                _userName,
                _action,
                _role
            )
        );
    }
}
