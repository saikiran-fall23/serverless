export const handler = async () => {
    /*
     * Generate HTTP response using 200 status code with a simple body.
     */
    const test= [
        "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/draft-60215b404d923__880.jpg",
        "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Meet-the-humor-of-Nate-Fakes-the-illustrator-who-will-surely-brighten-your-day-602248a4ec2b6__880.jpg",
        "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Meet-the-humor-of-Nate-Fakes-the-illustrator-who-will-surely-brighten-your-day-602248acf1f09__880.jpg",
        "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/1-602159f13acb0-png__880.jpg",
        "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Meet-the-humor-of-Nate-Fakes-the-illustrator-who-will-surely-brighten-your-day-6022489104bc2__880.jpg",
        "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Meet-the-humor-of-Nate-Fakes-the-illustrator-who-will-surely-brighten-your-day-6022482f1d7ad__880.jpg",
        "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Meet-the-humor-of-Nate-Fakes-the-illustrator-who-will-surely-brighten-your-day-602248309a870__880.jpg",
        "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Meet-the-humor-of-Nate-Fakes-the-illustrator-who-will-surely-brighten-your-day-6022488cefcc9__880.jpg",
        "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Meet-the-humor-of-Nate-Fakes-the-illustrator-who-will-surely-brighten-your-day-602248b301303__880.jpg",
        "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Meet-the-humor-of-Nate-Fakes-the-illustrator-who-will-surely-brighten-your-day-6022486305fb2__880.jpg"
        ]
    var rn = Math.floor(Math.random() * 10)
    const response = {
        statusCode: 200,
        body:
        `<h1>Refresh the page to see a new comic image.</h1><img src="${test[rn]}" alt='Comic-image' width='600' height='600'>`,
        
        headers: {
            'Content-Type': 'text/html'
        }
    };

    return response;
};
