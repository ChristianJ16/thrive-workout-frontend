import ExcerciseCard from "../components/ExerciseCard"

const Home = ({ exercises }) => {
    
    return (
        <div className="Home">
            <ExcerciseCard exercises={exercises} />
        </div>
        
        )
    
}
export default Home