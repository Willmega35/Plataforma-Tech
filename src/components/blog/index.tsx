import "./style.css"

interface contentBlog {
  type: string,
  title: string,
  description : string,
  duration: string,
  img: string
}

export default function Blogs ({type, title, description, duration, img }: contentBlog){
  return(
    <div className="blogs-container">
      <span className="type-blog">{type}</span>
      <div className="container-blogs">
        <h1 className="title-blog">{title}</h1>
        <p className="description-blog">{description}</p>
      </div>
      <span className="footer-blog">
        <p>{duration}</p>
        <img src={img} alt="" />
      </span>
    </div>
  ) 
}