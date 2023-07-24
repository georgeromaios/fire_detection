import spinner from './loading.gif'

const Loader = () => {
  return (
    <div className='loader'>

        <img src={spinner}alt='loading..'/>

        <h1>Fetching Data from NASA</h1>
    </div>
  )
}

export default Loader