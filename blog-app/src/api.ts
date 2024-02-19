export class APIs {
  private baseURL: string;

  public constructor() {
    this.baseURL = '/api'
  }

  public async postAPI<Type>(url: string, payload: object): Promise<Type> {
    return await fetch(`${this.baseURL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(response => {
      if(!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<Type>
    })
  }

  public async getAPI<Type>(url: string): Promise<Type> {
    return await fetch(`${this.baseURL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      if(!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<Type>
    })
  }
}

export function auth () {
  const apis = new APIs();
  const login = ({username, password}: {username: string, password: string}) => {
    return apis.postAPI('/auth/login', {
      username,
      password
    })
  }
  return {
    login
  }
}