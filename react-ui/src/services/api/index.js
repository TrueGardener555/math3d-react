// Example api call:

export const getGraph = async (id) => fetch(`api/graph/${id}`, {
  method: 'GET',
  headers: {}
} ).then(res => res.json())

export const updateGraph = async (id, update) => {
  const body = update
  return fetch(`/api/graph/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  } ).then(res => {
    return res.json()
  } )
}

export const saveGraph = async (id, dehydrated) => {
  const body = {
    '_id': id,
    dehydrated
  }
  return fetch(`/api/graph`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  } ).then(res => res.json())
}
