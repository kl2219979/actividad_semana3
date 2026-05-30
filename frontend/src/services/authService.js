// src/services/authService.js
const urlUsers = 'http://localhost:3000/users'

export async function loginUser(username, password) {
  const response = await fetch(urlUsers)
  const users = await response.json()
  const user = users.find(u => u.user === username && u.password === password)
  return user || null
}

export async function createUser(username, password) {
    const response = await fetch(urlUsers, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: username, password })
    })
    return await response.json()
}
