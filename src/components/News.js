import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
  const[articles,setArticles] = useState([]);
  const[loading,setLoading] = useState(false);
  const[page,setPage] = useState(1);
  const[totalResults,setTotalResults] = useState(0)
  
  const getCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews=async()=> {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    setLoading(true);
    props.setProgress(30);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  }
  useEffect(()=>{
    fetchMoreData();
    document.title = `${getCapitalize(props.category)} - NewsMonkey`;
  },[])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    // props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // props.setProgress(100);
  };
    return (
      <>
        <h2 className="text-center"  style={{ margin: '35px 0px', marginTop: '90px' }}> NewsMonkey - Top {getCapitalize(props.category)} headlines </h2>
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          inverse={true} 
          loader={<Spinner/>}
          // scrollableTarget="scrollableDiv"
        >
          <div className="container">
            <div className="row my-5">

              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title?.slice(0, 45)}
                      description={element.description?.slice(0, 88)}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      publishedDate={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
              </div>
            </div>
        </InfiniteScroll>
      </>
    );
}
News.defaultProps = {
  country: "in",
  page:1,
  pageSize: 8,
  category: "general",
  totalResults:0
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
