const deleteWorkout = async (workoutId) => {
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/workouts/${workoutId}/`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include', 
    })
    if (!response.ok) {
      throw new Error('Failed to delete workout')
    }
    return response.json()
  } catch (error) {
    console.log('Error deleting workout', error)
  }
}

export default deleteWorkout
// function to delete a workout through the API 