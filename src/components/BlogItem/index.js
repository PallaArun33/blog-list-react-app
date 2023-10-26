// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {userDetailsInformation} = props
  const {title, description, publishedDate} = userDetailsInformation

  return (
    <li className="list-items">
      <div className="post-date-container">
        <h1 className="post">{title}</h1>
        <p className="information">{publishedDate}</p>
      </div>
      <p className="information">{description}</p>
    </li>
  )
}
export default BlogItem
