import client from 'api/axios';

  // Send a request to get a file by it's id
  export const getCollaboratorsForFile = async (fileId, setCollaborators) => {
    const url = `/permission/${fileId}`;
  
    await client
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          setCollaborators(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const updateCollaboratorForFile = async (fileId, params) => {
    const url = `/permission/${fileId}`;
    
    await client
    .put(url, params)
    .then((res) => {
        console.log('res :>> ', res);
        if (res.status === 200) {
          return true;
        }
      })
      .catch((error) => {
        console.log(error);
        return false;
    });
}
