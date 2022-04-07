import client from 'api/axios';
import { SET_TOKEN } from 'components/GlobalState';

// Send a request to check if a user is logged in through the session cookie
export const checkSession = async (
  setUser
) => {
  const url = `/user/current`;

  await client
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setUser(res.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserById = async (userId, setUser) => {
  const url = `user/${userId}`;
  console.log(userId);
  await client
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setUser(res.data);
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

export const uploadProfilePicture = async (formData) => {
  await client
      .put(`user/image`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      })
      .then((res) => {
        console.log('res :>> ', res);
      })
      .catch((error) => {
        console.log("Error trying to upload Profile Picture :>> ", error);
      });
}