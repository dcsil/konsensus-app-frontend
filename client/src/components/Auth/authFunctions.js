import client from '../../axios';
import { SET_TOKEN } from 'components/GlobalState';

// Send a request to check if a user is logged in through the session cookie
export const checkSession = async (
  token,
  setFirstName,
  setLastName,
  setEmail,
  setId,
  setRole,
  setOrganization
) => {
  const url = `/user/current`;

  await client
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setId(res.data.id);
        setRole(res.data.role);
        setOrganization(res.data.organization);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// Send a request to get fileIds
export const getFiles = async (
  token,
  setOwnedFiles,
  setRecentFiles,
  setStarredFiles
) => {
  const url = `/user/current`; // gets the current user 

  await client
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setOwnedFiles(res.data.ownedFiles);
        setRecentFiles(res.data.recentFiles); // returns just the IDs
        setStarredFiles(res.data.starredFiles);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getRecentFiles = async (
  setRecentFiles
) => {
  const url = `/file/recent`;

  await client
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data); // res = response 
        setRecentFiles(res.data); // return the entire array for the ID
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// Send a request to get a file by it's id
export const getFileById = async (token, fileId, setFile) => {
  const url = `/file/access/${fileId}`;

  await client
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setFile(res.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// A function to send a POST request with the user to be logged in
export const login = (credentials, dispatch) => {
  const url = `user/authenticate`;

  return client
    .post(url, credentials, { withCredentials: true })
    .then((res) => {
      if (res.status === 200 && res.data.id !== undefined) {
        dispatch({ type: SET_TOKEN, payload: res.data.token });
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

// A function to send a POST request with the user to register
export const register = (credentials) => {
  const url = `user/register`;

  return client
    .post(url, credentials, { withCredentials: true })
    .then((res) => {
      if (res.status === 200 && res.data.id !== undefined) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

// A function to send a PUT request to update a user
export const updateUser = (credentials, id) => {
  const url = `user/${id}`;

  return client
    .put(url, credentials, { withCredentials: true })
    .then((res) => {
      if (res.status === 200 && res.data.id !== undefined) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
