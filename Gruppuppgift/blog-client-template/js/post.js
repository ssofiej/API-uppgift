window.onload = function(){



    console.log(location.search)

    let  urlParams = new URLSearchParams(location.search)
    let dataid = urlParams.get('id')
    console.log(dataid)

    async function fetchPuns() {




        try {
            const response = await fetch("https://blog-api-assignment.up.railway.app/posts/"+ dataid, {

                method: 'GET',

            });

            const data = await response.json()
            console.log(data.content)
            let postHTML =''

            postHTML += `<article> 
                            <h2>${data.title}</h2>
                            <i>${data.author}</i>
                            <i>${data.date}</i>
                            <p>Tags: ${data.tags}</p>
                            <p>${data.content}
                            </p>
                        
                           

                        </article>`

        document.getElementById('post').innerHTML = postHTML;


        } catch(error) {
            console.log(error);
        }


}
fetchPuns();





}