document.addEventListener('DOMContentLoaded', cargarPosts);



async function cargarPosts() {
        // Para produccion poner window.local
    let url = `http://54.153.122.87/wp-json/wp/v2/posts`;
    let respuesta = await fetch(url)
    const posts = await respuesta.json();
    return posts;
}

cargarPosts()
    .then (posts => {
        const post = document.createElement('div');
        post.innerHTML = `<div className="row">
        <div className="col-md-6">
            <div className="card">
                <img class="card-img-top" src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80" alt="Foto de card"></img>
                    <div className="card-header card-header-icon card-header-success">
                     <div className="card-icon">
                        <i className="material-icons">sports-soccer</i>
                     </div>
                    </div>
                <div className="card-body">
                <h4 className="card-title">Here is the Icon</h4>
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
                </div>
            </div>
        </div>
    </div>`
    const contenido = document.getElementById('about');
    contenido.appendChild(post);
    });


