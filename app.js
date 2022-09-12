const express = require('express');
const app = express()

// pet-listings
app.get('/pet-listing', (req, res) => {
	
	const model = {
		pageTile: 'Pets',
		components: [
			{
				type: 'featuredImage',
				data: {
					imageUrl: "https://unsplash.com/photos/gKXKBY-C-Dk"
				}
			}
		]
	}
	
	res.json(model)
})

app.listen(3000, () => {
	console.log("Server is running on 3000")
})