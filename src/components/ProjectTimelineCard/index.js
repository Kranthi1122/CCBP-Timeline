// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectList} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectList

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="image" />
      <div className="large-container">
        <h1 className="project-head">{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar className="icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="anchor">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
