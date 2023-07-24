import spinner from './loading.gif'

const Loader = () => {
  return (
    <div className='loader'>

        <img src={spinner}alt='loading..'/>

        <p>Φορτώνει...</p>
    </div>
  )
}

export default Loader