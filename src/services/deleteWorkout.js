const deleteWorkout = async (workoutId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/workouts/${workoutId}/`, {
      method: 'DELETE',
    })
    if (!response.ok){
      throw new Error('failed to delete workout')
    }
    return response.json()
  } catch (error){
    console.log('Error deleting workout', error)
  }
}

export default deleteWorkout