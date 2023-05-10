interface commentTypes {
    id: number,
    pid: number,
    cid: number|null,
    username: string,
    body: string,
    children: commentTypes[],
}

export default commentTypes;