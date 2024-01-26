const express = require('express')
const axios = require('axios')

const app = express()

const PORT = process.env.PORT ?? 1234

app.get('/repos/popular', async (req, res) => {
    try {
        const response = await axios.get('https://api.github.com/search/repositories', {
            params: {
            q: 'stars:>1',
            sort: 'stars',
            order: 'desc',
            per_page: 10,
            },
        });
        const popularRepos = response.data.items.map(repo => ({
            name: repo.name,
            url: repo.html_url,
            stars: repo.stargazers_count
        }))
        res.json(popularRepos)
    } catch (error) {
        console.error('No se puede obtener los repositorios populares', error)
        res.status(500).json({error: 'No se puede obtener los repositorios populares'})
    }
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})