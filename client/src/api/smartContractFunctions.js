import getWeb3 from 'getWeb3';
import FileActionsContract from 'contracts/FileActions.json';

// Function for sending a file action transaction
export const sendFileAction = async (
  fileId,
  fileName,
  date,
  userId,
  userName,
  action,
  role
) => {
  try {
    // Get network provider and web3 instance.
    const web3 = await getWeb3();

    // Use web3 to get the user's accounts.
    const accounts = await web3.eth.getAccounts();

    // Get the contract instance.
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = FileActionsContract.networks[networkId];
    const fileActionsInstance = new web3.eth.Contract(
      FileActionsContract.abi,
      deployedNetwork && deployedNetwork.address
    );

    // Pass in _fileId, _fileName, _date, _userId, _userName, _action, _role
    fileActionsInstance.methods
      .createFileAction(
        fileId,
        fileName,
        date,
        userId,
        userName,
        action,
        role
      )
      .send({ from: accounts[0] });
  } catch (error) {
    console.error(error);
  }
};

// Function for sending a file action transaction
export const getFileHistoryById = async (fileId, setActions) => {
  try {
    // Get network provider and web3 instance.
    const web3 = await getWeb3();

    // Get the contract instance.
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = FileActionsContract.networks[networkId];
    const fileActionsInstance = new web3.eth.Contract(
      FileActionsContract.abi,
      deployedNetwork && deployedNetwork.address
    );

    fileActionsInstance.methods
      .getAllFileActionsForFile(fileId)
      .call()
      .then((res) => setActions(res));
  } catch (error) {
    console.error(error);
  }
};
