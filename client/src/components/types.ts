interface postTypes {
    id?: string,
    username?: string,
    title?: string,
    body?: string,
    subreddit?: string,
    posted: Date,
    score: number,
}

export default postTypes;