import Info from '../infoSection'
import Pay from '../paySection'
import TopNavbar from '../topNavbar'


const index = () => {
  return (
    <>
        <TopNavbar/>
        <section className='flex justify-between container'>
            <Info />
            <Pay />
        </section>
    </>
  )
}

export default index