// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-ul-items">
      {blogsList.map(eachBlog => (
        <BlogItem userDetailsInformation={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}
export default BlogList
