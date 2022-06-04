import {request, gql} from 'graphql-request';

export const getPosts = async () => {
    const query= gql`
    query MyQuery {
            postsConnection {
              edges {
                node {
                  author {
                    bio
                    name
                    photo {
                      url
                    }
                  }
                  createdAt
                  slug
                  title
                  excerpt
                  featuredImage {
                    url
                  }
                  categories {
                    name
                    slug
                  }
                }
              }
          }
      }
    `
    const result = await request('https://api-sa-east-1.graphcms.com/v2/cl30qe9wv0xgr01z81ep1ez0g/master', query)
    return result.postsConnection.edges;
}

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `

  const result = await request('https://api-sa-east-1.graphcms.com/v2/cl30qe9wv0xgr01z81ep1ez0g/master', query);

  return result.categories;
};

export const getPostsDetails = async (slug) => {
    const query= gql`
    query GetPostDetails($slug: String!) {
        post(where: {slug: $slug}) {
                  author {
                    bio
                    name
                    id
                    photo {
                      url
                    }
                  }
                  createdAt
                  slug
                  title
                  excerpt
                  featuredImage {
                    url
                  }
                  categories {
                    name
                    slug
                  }
                  content{
                    raw
                  }
                }
      }`
    const result = await request('https://api-sa-east-1.graphcms.com/v2/cl30qe9wv0xgr01z81ep1ez0g/master', query, {slug});
    return result.post;
  };

  export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: {post: { slug : $slug }}){
        name
        createdAt
        comment
      }
    }
    `;

  const result = await request( 'https://api-sa-east-1.graphcms.com/v2/cl30qe9wv0xgr01z81ep1ez0g/master' , query, { slug });

  return result.comments;
};

  export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

  