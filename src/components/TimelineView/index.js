// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="container">
      <div className="large">
        <h1 className="heading">
          MY JOURNEY OF <br />
          <span className="span">CCBP 4.0</span>
        </h1>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(each => (
            <div className="list" key={each.id}>
              {each.categoryId === 'COURSE' ? (
                <CourseTimelineCard courseList={each} />
              ) : (
                <ProjectTimelineCard projectList={each} />
              )}
            </div>
          ))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
