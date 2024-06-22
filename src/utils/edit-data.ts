import { instance, URL } from "../routes/url-config";

export const changeData = async (token: string, id: string, inputs: object) => {
  try {
    if (token) {
      const body = JSON.stringify(inputs);
      return await instance.post(URL.CHANGE_DATA + id, body, {
        headers: {
          "x-auth": token,
        },
      });
    }
  } catch (e) {
    throw new Error(e as string);
  }
};
