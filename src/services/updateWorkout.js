const updateWorkout = async (workoutId, workoutData) => {
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/workouts/${workoutId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include', 
      body: JSON.stringify(workoutData),
    })
    if (!response.ok) {
      throw new Error('Failed to update workout')
    }
    return response.json()
  } catch (error) {
    console.log('Error updating workout', error)
  }
}

export default updateWorkout