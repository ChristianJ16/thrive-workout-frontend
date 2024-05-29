const saveWorkout = async (workout) => {
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/workouts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include', 
      body: JSON.stringify(workout),
    })
    if (!response.ok) {
      throw new Error('Error saving workout')
    }
    return response.json()
  } catch (error) {
    console.log('Error saving workout', error)
    throw error
  }
}

export default saveWorkout
