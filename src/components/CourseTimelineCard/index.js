import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseList} = props
  const {courseTitle, description, duration, tagsList} = courseList
  return (
    <div className="course-container">
      <div className="large-container">
        <h1 className="course-head">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="course-para">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="tags-list">
        {tagsList.map(each => (
          <div key={each.id}>
            <p className="tags-para">{each.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
