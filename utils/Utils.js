const Utils = {
  post: async (
    url,
    formData,
    headers = {
      'Content-Type': 'multipart/form-data',
    },
  ) => {
    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: headers,
      body: formData,
    });
    const response = {
      status: res.status,
      data: await res.json(),
    };
    return response;
  },
  get: async (url, headers = {}) => {
    const res = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
    const response = {
        status: res.status,
        data: await res.json()
    };
    return response
  },
};

export default Utils;
