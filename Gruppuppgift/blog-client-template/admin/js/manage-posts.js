fetchBlog();

async function fetchBlog() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let blogs = await response.json();

        let blogHTML = '';
        for(let blog of blogs) {
            let blogDate = new Date(blog.date)

             blogHTML += `<tr> 
                            <td>${blog.title}</td>
                            <td>${blog.author}</td>
                            <td>${blog.date}</td>
                            <td>${blog.tags}</td>
                            <td>
                                <button>
                                <a href="update-post.html">Update</a>
                                </button>
                                <button>
                                <a href="update-post.html">Delete</a>
                                </button>
                            </td>

                        </tr>`

        }
        

        document.getElementById('table').innerHTML += blogHTML;

    } catch(error) {
        console.log(error);
    }



}
