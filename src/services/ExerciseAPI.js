// const fetchExercises = async () => {
//   const limit = 'limit=25' //this is limiting to 25 results...
//   const API_URL = `https://exercisedb.p.rapidapi.com/exercises?${limit}` 
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_EXERCISEDB_API_KEY, // retrieve API key from .env file
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
//   }

//   try {
//     const response = await fetch(API_URL, options)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.log('failed to fetch exercises ', error)
//   }
// } 

// export default fetchExercises

const fetchExercises = async () => {
  const API_URL = `${process.env.REACT_APP_BACKEND_URL}/exercises`
  // Backend URL from .env file
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('failed to fetch exercises ', error)
  }
}

export default fetchExercises

