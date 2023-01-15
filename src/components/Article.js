import React from "react";
function Article (props){
    const articleDate="January 1, 1970"
    return (<article>
         <h3>{props.title}</h3>
         <small>{props.articleDate}</small>
         <p>{props.preview}</p>
    </article>);
}
export default Article;
