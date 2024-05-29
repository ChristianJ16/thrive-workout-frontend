import { useState } from "react"
import "./Search.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faRightLong } from "@fortawesome/free-solid-svg-icons"

const Search = ({ exerciseData, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [autoFillSuggestions, setAutoFillSuggestions] = useState([])

  const handleInputChange = async (event) => {
    const { value } = event.target
    setSearchQuery(value)
    if (value.trim() !== "") {
      const suggestions = await fetchAutoFillSuggestions(value);
      setAutoFillSuggestions(suggestions)
    } else {
      setAutoFillSuggestions([])
    }
  }

  const fetchAutoFillSuggestions = async (query) => {
    const suggestions = exerciseData.filter((exercise) =>
      exercise.name.toLowerCase().includes(query.toLowerCase())
    )
    return suggestions.slice(0, 50) // Limit to 50 suggestions
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault()
    onSearch(searchQuery)
    setAutoFillSuggestions([])
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="input-wrapper">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <input className="search-input"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search exercises..."
        />
        <button style={{
          all: "unset",
        }}type="submit"><FontAwesomeIcon icon={faRightLong} className="search-arrow"/></button>
      </div>

      <ul className={ autoFillSuggestions.length > 0 ? "autofill-list show" : "autofill-list"  } >
        {autoFillSuggestions.map((suggestion, index) => (
          <li className="suggested-list" key={index} onClick={() => {
            setSearchQuery(suggestion.name)
            setAutoFillSuggestions([])
          }}>
            {suggestion.name}
          </li>
        ))}
      </ul>
    </form>
  )
}

export default Search
