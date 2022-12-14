fetchBlog();

async function fetchBlog() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let blogs = await response.json();

        let blogHTML = '';
        let char100 = "";

        for(let blog of blogs) {
            let blogDate = new Date(blog.date)

           blogHTML += `<article> 
                            <h2>${blog.title}</h2>
                            <i>${blog.author}</i>
                            <i>${blog.date}</i>
                            <p>Tags: ${blog.tags}</p>
                            <p>${blog.content}
                                <a href="post.html?id=${blog._id}">read more..</a>
                            </p>
                        
                           

                        </article>`
                        for(let char in blog.content){
                            if(char < 100){
                                char100 += blog.content[char]
                            }
                            else{
                                blog.content
                            }
                        }

        }


        document.getElementById('div').innerHTML += blogHTML;

    } catch(error) {
        console.log(error);
    }
}
