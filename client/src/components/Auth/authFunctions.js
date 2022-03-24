// Functions to help with user actions.
import axios from 'axios';
const API_HOST = 'https://konsensus-backend.herokuapp.com';

// Send a request to check if a user is logged in through the session cookie
// export const checkSession = (app) => {
//   const url = `${API_HOST}/users/check-session`;

//   axios
//     .get(url)
//     .then((res) => {
//       if (res.status === 200 && res.data.id) {
//         app.setState({
//           id: res.data.id,
//           role: res.data.role,
//         });
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// A function to send a POST request with the user to be logged in
export const login = (credentials, app) => {
  const url = `${API_HOST}/users/authenticate`;

  return axios
    .post(url, credentials)
    .then((res) => {
      if (res.status === 200 && res.data.id !== undefined) {
        app.setState({
          id: res.data.id,
          username: res.data.username,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          token: res.data.token,
        });
        window.location.href = '/admin/index';
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

// A function to send a GET request to logout the current user
export const logout = (app) => {
  const url = `${API_HOST}/users/logout`;

  axios
    .get(url)
    .then((res) => {
      app.setState({
        id: null,
        role: null,
      });
      window.location.href = '/login';
    })
    .catch((error) => {
      console.log(error);
    });
};

// Returns 0 on successful database addition, -1 otherwise
export const signup = (credentials) => {
  const url = `${API_HOST}/users`;

  return axios
    .post(url, credentials)
    .then((res) => {
      if (res.status === 200 && res.data.email !== undefined) {
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export const getUsers = () => {
  const url = `${API_HOST}/users/all`;

  return axios
    .get(url)
    .then((res) => {
      return res.data.user;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const getCurrentUser = () => {
  const url = `${API_HOST}/users`;

  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

// Returns 0 on successful database addition, -1 otherwise
export const edit = (userID, op, path, value) => {
  const url = `${API_HOST}/users/edit/${userID}`;

  const body = [{ op: op, path: path, value: value }];
  return axios
    .patch(url, body)
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

// Remove the user from the DB
export const removeUser = (userID) => {
  const url = `${API_HOST}/users/remove/${userID}`;

  return axios
    .delete(url)
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
