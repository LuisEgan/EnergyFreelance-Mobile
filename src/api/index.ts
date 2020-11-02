import axios from 'axios';
import { IUser } from '../lib/types';

// * Interface for login func params
interface ISignIn {
  email: string;
  password: string;
  rememberMe: boolean;
  onError?: (error: string) => void;
}

// * Interface for login endpoint response
interface ISignInRes {
  token: string;
  expiration: number;
  refreshToken: string;
  success: boolean;
  message: string | null;
  user: IUser;
}

const signIn = async (params: ISignIn): Promise<ISignInRes> => {
  const { email, password, rememberMe, onError } = params;

  try {
    const res = await axios.post<ISignInRes>(`${process.env.API_URL}/login`, {
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
  signIn,
};
