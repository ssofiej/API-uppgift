fetchBlog();

async function fetchBlog() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let blogs = await response.json();

        let blogHTML = '';
        for(let blog of blogs) {
            let blogDate = new Date(blog.date)

           /* punsHTML += `
                <li class="list-group-item">
                    <p>${pun.content} <br> <span class="date">- ${punDate.getFullYear()}-${punDate.getMonth() + 1}-${punDate.getDate()} ${punDate.getHours()}-${punDate.getMinutes()}-${punDate.getSeconds()}</span> </p>
                    
                    <div>
                        <a href="update-pun.html?id=${pun._id}">Update</a> |
                        <a href="#" class="delete-links" data-id="${pun._id}">Delete</a> 
                    </div>
                </li>

         */  blogHTML += `<tr> 
                            <td>${blog.title}</td>
                            <td>${blog.author}</td>
                            <td>${blog.date}</td>
                            <td>${blog.tags}</td>
                            <td>
                                <a href="update-post.html">Update</a>
                                <a href="update-post.html">Delete</a>
                            </td>

                        </tr>`

        }
        

        document.getElementById('table').innerHTML += blogHTML;

    } catch(error) {
        console.log(error);
    }


    /**
     * Add here an eventlistener to all delete-links, 
     * that makes a request to delete the chosen pun from DB, 
     * And also deletes the pun from the DOM
     * 
     * 1. Begin with selecting all delete-links with an appropiate element selector
     * 2. Loop through all delete-links and add an eventlistener for each delete-link,
     * 3. The eventlisteners should be triggered on the 'click'-event
     * 4. Make sure to use preventDefault(), to prevent the link from reloading the page
     * 5. When triggered, the eventlistener should make a "DELETE" request to the URL: https://pun-api.up.railway.app/puns/<punID>, and the <punId> should be retrieved from delete-link data-attribute => 'e.target.dataset.id'
     * 6. Make sure to remove() the whole pun from DOM.
     */


     deletePunEvent();
}


function deletePunEvent() {
    const deleteLinks = document.getElementsByClassName('delete-links');
    for (let link of deleteLinks) {
        link.addEventListener('click', async function(e) {
            e.preventDefault();
            console.log(e.target);
            console.log(e.target.dataset.id);

            try {
                const response = await fetch('https://pun-api.up.railway.app/puns/' + e.target.dataset.id, {
                    method: 'DELETE'
                });
    
                e.target.parentNode.parentNode.remove();
            } catch(error) {
                console.log(error);
            }
        })
    }
}





