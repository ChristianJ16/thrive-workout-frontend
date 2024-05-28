const fetchWorkouts = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/workouts/`)
    if (!response.ok) {
      throw new Error('Failed to fetch workouts');
    }
    return response.json()
  } catch (error) {
    console.log('Error fetching workouts', error)
    return []
  }
}

export default fetchWorkouts