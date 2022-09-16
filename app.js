const express = require('express')
const app = express() 

// /pet-listing 
app.get('/pet-listing', (req, res) => {

    const model = {
        pageTitle: 'Pets', 
        components: [
            {
                type: "featuredImage", 
                data: {
                    imageUrl: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
                }
            }
        ]
    }

    res.json(model)
})

app.listen(3000, () => {
    console.log('Server is running...')
})