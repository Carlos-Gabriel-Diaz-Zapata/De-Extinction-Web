export const fakeLogin = async (username, password) => {
    if (username === 'admin' && password === 'admin') {
      return 'fake_access_token_admin';
    } else if (username === 'user' && password === 'user') {
      return 'fake_access_token_user';
    } else {
      throw new Error('Credenciales incorrectas');
    }
  };
  