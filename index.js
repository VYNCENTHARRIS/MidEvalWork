// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the Express application
const app = express();
const port = 3000;


app.use(bodyParser.json());

// The mock database (an array)
let fakeDatabase = [];

// Endpoint to retrieve all entries from the database
// GET /api/data(Fake name)
app.get('/api/data', async (req, res) => {
    // Creates a delay using a promise and setTimeout Await is a keyword for an async function
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    // Send the mock database as a JSON response
    res.json(fakeDatabase);
});


// POST /api/data(fake name)
app.post('/api/data', async (req, res) => {
    // Simulate a delay using a promise and setTimeout
    await new Promise(resolve => setTimeout(resolve, 1000)); // 
    // Get the new data from the request body
    const newData = req.body;
    // Add the new data to the fake database
    fakeDatabaseDatabase.push(newData);
    // Send the new data as a JSON response with 200 "OK" status code
    res.status(200).json(newData);
});

// This will update an existing entry in the database
app.put('/api/data/:id', async (req, res) => {
    // Simulate a delay using a promise and setTimeout
    await new Promise(resolve => setTimeout(resolve, 1000)); // 
    // Get the ID from the request parameters
    const { id } = req.params;
    // Get the updated data from the request body
    const updatedData = req.body;

    // Find the index of the data using an ID 
    const index = fakeDatabase.findIndex(data => data.id === parseInt(id));
    //findIndex() returns the index of the first element that passes a test
    if (index !== -1) {
        // Update the data entry in the fake database
        fakeDatabase[index] = updatedData;
        // Send the updated data as a JSON response
        res.json(updatedData);
    } else {
        // If the data entry was not found, send a 404 error response
        res.status(404).json({ message: 'Sorry, data not found' });
    }
});

// Endpoint to delete an entry from the database
// DELETE /api/data/:id
app.delete('/api/data/:id', async (req, res) => {
    // Simulate a delay using a promise and setTimeout
    await new Promise(resolve => setTimeout(resolve, 1000)); //
    // Get the ID from the request parameters
    const { id } = req.params;
    // Find the index of the data entry with the matching ID
    const index = fakeDatabase.findIndex(data => data.id === parseInt(id));

    if (index !== -1) {
        // Remove the data entry from the mock database
        const deletedData = fakeDatabase.splice(index, 1);
        // Splice will remove the element from the arraythe deleted data as a JSON response
        res.json(deletedData);
    } else {
        // If the data entry was not found, send a 404 error response
        res.status(404).json({ message: 'Sorry, data not found' });
    }
});

// Starts the server and listen on our port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
