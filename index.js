
 fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        const categoriesContainer = document.getElementById('categories');

        // Loop through the products and create a card for each one
        data.products.forEach(product => {
            const categoryCard = `
                <div class="card">
                    <img src="${product.thumbnail}" alt="${product.title}" />
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                </div>`;
            
            categoriesContainer.innerHTML += categoryCard;
        });
    })
    .catch(error => console.error('Error fetching products:', error));
