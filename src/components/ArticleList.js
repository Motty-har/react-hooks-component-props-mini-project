import React from "react";
import Article from "./Article.js";

function ArticleList({posts}){
    const articles = posts.map((post) => (
         <Article 
            key={post.id} 
            title={post.title} 
            preview={post.preview}
            minutes={post.minutes} 
            date={post.date} />  
    ))
    return(
        <div>
            <main>{articles}</main>
        </div>
    )
}

export default ArticleList