const fetchWorkouts = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      console.error('Token is not available')
      return []
    }
    try {
      const response = await fetch('http://localhost:4000/workouts/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      if (!response.ok) {
        throw new Error('Failed to fetch workouts')
      }
      return await response.json()
  } catch (error) {
    console.error('Error fetching workouts', error)
    return []
  }
}

export default fetchWorkouts