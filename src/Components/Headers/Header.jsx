import Profile from '../../assets/profile.png'
const Header = () => {
  return (
    <header className='flex items-center px-4 py-10 md:px-4 lg:px-0 justify-between  border-b-2 max-w-7xl mx-auto h-14'>
      <h1 className='text-4xl font-bold'>knowledge Cafe</h1>
      <img className='w-14 h-14 items-center' src={Profile} alt="" />
    </header>
  )
}

export default Header