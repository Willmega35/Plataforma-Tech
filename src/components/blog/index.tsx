import "./style.css"

interface contentBlog {
  type: string,
  title: string,
  description : string,
  duration: string,
  img: string
}

export default function Blog ({type, title, description, duration, img }: contentBlog){
  return(
    <div className="blog-container">
      <h1 className="blog-type">{type}</h1>
      <h1 className="blog-title">{title}</h1>
      <p className="blog-description">{description}</p>
      <div className="blog-date">
        <p>{duration}</p>
        <img src={img} alt="" />
      </div>
    </div>
  ) 
}