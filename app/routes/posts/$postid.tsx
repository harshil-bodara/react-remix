import { useParams, useLoaderData } from '@remix-run/react'

export const loader = () => {
    const data = {
        posts: [
            { id: 1, name: "post 1" },
            { id: 2, name: "post 2" },
            { id: 3, name: "post 3" }
        ]
    }
    return data
}

const Posts = () => {
    const { postid } = useParams();
    const { posts } = useLoaderData();
    return (
        <>
            <div>Post ID: {postid}</div>
            {posts.map((val: any) => {
                return <h3>{val.name}</h3>
            })}
        </>
    )
}

export default Posts