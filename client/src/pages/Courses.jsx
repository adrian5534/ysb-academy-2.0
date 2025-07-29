import Header from '../layout/Header'
import Footer from '../layout/Footer'
import CourseList from '../components/CourseList'

function Courses() {
  return (
    <div className="homepage">
      <Header />
      <main>
        <h2 style={{ textAlign: 'center', margin: '48px 0 24px 0' }}>Explore Our Courses</h2>
        <CourseList />
      </main>
      <Footer />
    </div>
  )
}
export default Courses