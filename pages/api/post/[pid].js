export default function handler(req, res) {
    const {
        query: { pid },
    } = req

    res.end(`Post: ${pid}`)
}