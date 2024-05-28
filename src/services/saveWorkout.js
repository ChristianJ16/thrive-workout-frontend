const saveWorkout = async (workout) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/workouts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workout),
    })
    if (!response.ok){
      throw new Error('Error saving workout')
    }
    return response.json()
  } catch (error){
    console.log('Error saving workout', error)
  }
}

export default saveWorkout