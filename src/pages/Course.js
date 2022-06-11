import '../styles/_course.scss'
import Sidebar from '../components/Sidebar'
import Calendar from '../components/Calendar'
import 'react-calendar/dist/Calendar.css'
function Course() {
  return (
    <>
      <Sidebar />
      <Calendar />
    </>
  )
}

export default Course
