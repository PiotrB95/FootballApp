const API_URL = import.meta.env.VITE_API_URL

export const useApi = () => {
  const call = async <R, P = {}>(
    url: string,
    method: 'GET' | 'DELETE' | 'POST' | 'PUT',
    payload?: P,
  ): Promise<R> => {
    const fetchConfig = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload ? JSON.stringify(payload) : undefined,
    }

    try {
      const response = await fetch(`${API_URL}${url}`, fetchConfig)

      if (response.ok) {
        console.log(response, 'test')
        const data: R = await response.json()
        console.log(data, 'test')
        return data
      } else {
        const apiError: string = await response.text()
        throw new Error(apiError)
      }
    } catch (e) {
      throw new Error('Wystąpił błąd!')
    }
  }

  const apiGet = async <R>(url: string) => {
    return await call<R>(url, 'GET')
  }

  const apiPost = async <R, P>(url: string, payload: P) => {
    return await call<R, P>(url, 'POST', payload)
  }

  const apiPut = async <R, P>(url: string, payload: P) => {
    return await call<R, P>(url, 'PUT', payload)
  }

  const apiDelete = async <R>(url: string) => {
    return await call<R>(url, 'DELETE')
  }

  return {
    apiGet,
    apiPost,
    apiPut,
    apiDelete,
  }
}
