pragma solidity >=0.5.0;
pragma experimental ABIEncoderV2;

contract FileActions {
    mapping(uint256 => FileAction[]) public fileMappings; // state variable
    uint256 public fileMappingCount;

    struct FileAction {
        // uint id;
        uint256 fileId; // File Id should match Id in Konsensus Backend
        string fileName;
        string date;
        uint256 userId; // User attributes
        string action;
        string role;
    }

    constructor() public {}

    function getAllFileActionsForFile(uint256 _fileId)
        public
        view
        returns (FileAction[] memory)
    {
        return fileMappings[_fileId];
    }

    // Adds a new file action with fileId <id> and
    function createFileAction(
        uint256 _fileId,
        string memory _fileName,
        string memory _date,
        uint256 _userId,
        string memory _action,
        string memory _role
    ) public {
        fileMappingCount++;
        fileMappings[_fileId].push(
            FileAction(_fileId, _fileName, _date, _userId, _action, _role)
        );
    }
}
