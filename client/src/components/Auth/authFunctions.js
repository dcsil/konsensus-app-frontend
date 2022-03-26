import client from 'axios';
import Cookies from 'js-cookie';

// const API_HOST = 'https://konsensus-backend.herokuapp.com';
const API_HOST = 'http://localhost:8080';

// Send a request to check if a user is logged in through the session cookie
export const checkSession = () => {
  const url = `${API_HOST}/user/current`;

  client
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// A function to send a POST request with the user to be logged in
export const login = (credentials, prop) => {
  const url = `${API_HOST}/user/authenticate`;

  return client
    .post(url, credentials, { withCredentials: true })
    .then((res) => {
      if (res.status === 200 && res.data.id !== undefined) {
        console.log({
          id: res.data.id,
          email: res.data.email,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          token: res.data.token,
        });
        client.interceptors.request.use(
          (config) => {
            const token = Cookies.get('access');
            if (token) {
              config.headers['Authorization'] = 'Bearer ' + token;
            }
            return config;
          },
          (error) => {
            Promise.reject(error);
          }
        );
        prop.setState({ token: res.data.token });
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
  const url = `${API_HOST}/user/register`;

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

// A function to send a GET request to logout the current user
export const logout = (app) => {
  const url = `${API_HOST}/users/logout`;

  client
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

  return client
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

  return client
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

  return client
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
  return client
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

  return client
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
