import React from 'react'

import { getPosts, getPostsDetails } from '../../Services/index';
import PostDetail from '../../Components/PostDetail';
import Author from '../../Components/author';
import Comments from '../../Components/comments.jsx';
import CommentsForm from '../../Components/commentsForm.jsx';

const PostDetails = ({post}) => {
    return(
        <div>
            <PostDetail post={post} />
            <Author author={post.author} />
            <Comments slug={post.slug} />
            <CommentsForm slug={post.slug} />
        </div>
    )

}

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostsDetails(params.slug);

  return {
    props: { post: data},
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({node:{slug }}) => ({ params: { slug } })),
    fallback: true,
  };
}x
