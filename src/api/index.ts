import axios from 'axios';
import { proc } from 'react-native-reanimated';
import { IUser } from '../lib/types';

// * Interface for login func params
interface ILogin {
  email: string;
  password: string;
  rememberMe: boolean;
  onError?: (error: string) => void;
}

// * Interface for login endpoint response
interface ILoginRes {
  token: string;
  expiration: number;
  refreshToken: string;
  success: boolean;
  message: string | null;
  user: IUser;
}

const login = async (params: ILogin): Promise<ILoginRes> => {
  const { email, password, rememberMe, onError } = params;

  return ':p';
  try {
    const res = await axios.post<ILoginRes>(`${process.env.API_URL}/login`, {
      email,
      password,
      rememberMe,
    });

    if (!res.data.token) {
      throw new Error('No token');
    }

    return res.data;
  } catch (error) {
    console.error('error: ', error);
    if (onError) onError(error);
    throw new Error(error);
  }
};

export default {
  login,
};
