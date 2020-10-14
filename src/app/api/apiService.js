
export default class ApiService {


  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    const result = await res.json()
    console.log(result)
    return result;
  }

  addNewUser = async (data) => {

  
    const res = await fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users',{
        method: 'POST',
        body: data.formData,
        headers: {
          'Token': data.token
        }
      }
    );

    const result = await res.json()
    console.log(result)
    return result;
  }

  getToken = async () => {
    return await this.getResource('https://frontend-test-assignment-api.abz.agency/api/v1/token/')
  }

  getPositions = async () => {
    return await this.getResource('https://frontend-test-assignment-api.abz.agency/api/v1/positions/')
  }

}