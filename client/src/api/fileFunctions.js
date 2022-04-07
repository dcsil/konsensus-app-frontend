import client from 'api/axios';

export const uploadFile = async (formData) => {
    await client
        .post('file/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
}

export const reuploadFile = async (formData, fileId) => {
    await client
        .put(`file/${fileId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
}

export const getFiles = async (
    url,
    setFiles
  ) => {
  
    await client
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          setFiles(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  export const starFile = async (fileId) => {
    const url = `/file/star/${fileId}`;
  
    await client
      .put(url)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  // Send a request to get a file by its id
  export const getFileById = async (fileId, setFile) => {
    const url = `/file/access/${fileId}`;
  
    await client
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          setFile(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
