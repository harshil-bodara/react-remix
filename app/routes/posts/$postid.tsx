import { useParams } from '@remix-run/react'

const Posts = () => {
    const { postid } = useParams();
    return (
        <div>Post ID: {postid}</div>
    )
}

export default Posts