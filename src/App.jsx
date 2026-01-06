import { useState, useEffect } from 'react'

const Card = ({ title }) => {
    const [count, setCount] = useState(0);
    const [ hasLiked, setHasLiked ] = useState(false); //makes more sense to have this here because each card has a different hasLiked state

    useEffect(() => {
        console.log(`${title} has been liked: ${count}`);
    }, [hasLiked]);

    return (
        <div className={'card'} onClick={() => setCount((prevState) => prevState + 1)}>
            <h2>{ title } <br /> { count ? count : null}</h2>

            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? 'Liked' : 'Like'}
            </button>
        </div>
    )
} //changing the output in like 11 depending on the state is important for each card using the if else colon operator

const App = () => {

    return(
        <div className={ 'card-container' }>
            <Card title={ 'Star Wars' }/>
            <Card title={ 'Avatar' }/>
            <Card title={ 'The Lion King' }/>
        </div>
    )
}

export default App