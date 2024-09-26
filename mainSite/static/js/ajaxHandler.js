document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = "http://localhost:8000/api/"
    const productsContainer = document.getElementById('products');
    listProducts()
    document.getElementById('productForm').addEventListener('submit', function (event) {
        // Предотвращаем стандартное поведение формы
        event.preventDefault();
        // Получаем значения из полей формы
        var name = document.getElementById('inputName');

        var description = document.getElementById('inputDescrip');


        var price = document.getElementById('inputPrice');
        if (!name.value.trim()) {
            alert('Введите название продукта');
            return;
        }

        if (!description.value.trim()) {
            alert('Введите описание продукта');
            return;
        }

        if (!price.value.trim() || isNaN(price.value) || Number(price.value) <= 0) {
            alert('Введите корректную цену (должна быть числом больше 0)');
            return;
        }

        // Создаем объект с данными
        const productData = {
            name: name.value,
            description: description.value,
            price: price.value
        };
        fetch(`${apiUrl}products/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при создании продукта');
                }
                return response.json();
            })
            .then(data => {
                console.log('Продукт создан:', data);
                listProducts()

            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    });

    function listProducts() {
        productsContainer.innerHTML = '';
        fetch(`${apiUrl}products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(products => {
                products.forEach(product => {

                    var productElement = document.createElement('div');
                    productElement.className = 'col container'
                    productElement.innerHTML = `
                    <p>${product.name}</p>
                    <p>${product.price}</p>
                    <p>${product.description}</p>
                `

                    productsContainer.appendChild(productElement);
                })
            })
            .catch(error => {
                console.error('Ошибка:', error);
            })
    }
});
