import Profile from '../../assets/profile.png'
const Header = () => {
  return (
    <header className='flex justify-between mt-4 border-b-2 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold'>knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </header>
  )
}

export default Header