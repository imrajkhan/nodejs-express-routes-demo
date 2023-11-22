
CRUL example to post
curl -X POST -H "Content-Type: application/json" -d '{"title": "Sample Title", "body": "Sample Body", "image": "https://sampleimage.com"}' http://localhost:3000/post

You can hit and test:
Access the home route: http://localhost:3000/
Send a POST request to /post with JSON data.
Send a GET request to /query?param1=value1&param2=value2 to test query parameters.
Access dynamic URL parameters by visiting routes like /user/123, where 123 can be any ID.
