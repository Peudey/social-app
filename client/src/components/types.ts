interface postTypes {
    id: number,
    username?: string,
    title?: string,
    body?: string,
    subreddit?: string,
    posted: Date,
    score: number,
    vote: number,
}

export default postTypes;