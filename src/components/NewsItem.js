import React from 'react'

const NewsItem = (props)=> {
    let {title,description,imageUrl,newsUrl,author,publishedDate,source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div className='news-badge'>  
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
        <img src={imageUrl?imageUrl:"https://media.istockphoto.com/id/1313303632/video/breaking-news-template-intro-for-tv-broadcast-news-show-program-with-3d-breaking-news-text.jpg?s=640x640&k=20&c=S0dTZp37XKVcCAnoguMnRatvv4Nkp2cjmA5aYOOrJs8="} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?author:"Unknown"} on {new Date(publishedDate).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
}

export default NewsItem
