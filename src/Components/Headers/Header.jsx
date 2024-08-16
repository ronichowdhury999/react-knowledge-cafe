import Profile from '../../assets/profile.png'
const Header = () => {
  return (
    <header className=' bg-gradient-to-r from-cyan-300 to-gray-300'>
      <div className=' flex max-w-7xl mx-auto border-b-2 h-14 justify-between items-center px-4 py-10 md:px-4 lg:px-0'>
        <h1 className='text-4xl font-bold'>knowledge Cafe</h1>
        <img className='w-14 h-14 items-center' src={Profile} alt="" />
      </div>
    </header>
  )
}

export default Header