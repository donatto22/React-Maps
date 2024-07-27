import axios from 'axios'

const API = 'http://localhost:3000/locations'

export const getCoordinates = async () => {
    let data = null

    await axios.get(API).then(res => {
        data = res.data
    })

    return data
}
