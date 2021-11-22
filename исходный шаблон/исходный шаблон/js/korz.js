function korz() {
    //open
    let modalCart = document.querySelector('.modal-cart')
    let modalCartBtn = document.querySelector('.button-cart')
    modalCartBtn.addEventListener('click', show);

    function show() {
        let itemIn = JSON.parse(localStorage.getItem('basket')) || []
        modalCart.classList.add('is-open');
        createManyCards(itemIn)


        // const btnMin=document.querySelectorAll('.btn-min');
        // const btnPlus=document.querySelectorAll('.btn-plus');

        // btnMin.forEach(item=>{
        // console.log(item.firstChild.data)
        // item.addEventListener('click',countM())
        //})//item.firstChild.data
    }
    //

    //закрытие
    const btnClose = document.querySelector(".close")
    btnClose.addEventListener("click", closeModal);

    modalCart.addEventListener("click", e => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    })

    function closeModal(e) {
        modalCart.classList.remove('is-open');
        modal.textContent = '';
        //summ=0;
    }

    document.addEventListener("keydown", e => {
        if (e.code === "Escape") {
            modalCart.classList.remove('is-open');
        }
    })
    //



    //let addBtn = document.querySelector('.button-add-cart')
    //let modal = document.querySelector('.modal-body');
    //modalCartBtn.addEventListener('click', );
    let modal = document.querySelector('.modal-body');
    function createManyCards(data) {
        modal.innerHTML = '';
        counting(data)
        data.forEach(item => {
            const card = document.createElement('div')
            card.classList.add("food-row")
            card.innerHTML = createCard(item);

            card.querySelector('.btn-min').addEventListener("click", () => {
                countM(item)
            })
            card.querySelector('.btn-plus').addEventListener("click", () => {
                countP(item)
            })
            modal.append(card)


        });

    }
    let summ = document.querySelector('.modal-pricetag')
    //const basket = JSON.parse(localStorage.getItem('basket'))

    const clearBtn = document.querySelector('.clear-cart')
    clearBtn.addEventListener('click', () => {
        localStorage.removeItem('basket');
        closeModal();
    });


    //find filter
    // let sum=0;
    function createCard(item) {
        let { id, name, price, count } = item
        return `
        <span class="food-name" id="${id}">${name}</span>
        <strong class="food-price">${price*count} ₽</strong>
        	<div class="food-counter">
        		<button class="counter-button btn-min">-</button>
         		<span class="counter">${count}</span>
        	<button class="counter-button btn-plus">+</button>
        </div>`

    }
    function counting(data) {
        return summ.textContent = `${data.reduce((accum, item) => accum + item.price * item.count, 0)} ₽`
    }




    const countM = (basketItem) => {
        //console.log(document.querySelector('.food-name').id)

        const basket = JSON.parse(localStorage.getItem('basket')) || []
        //    itemIn.count--
        console.log(basketItem)
        const index = basket.findIndex(item => basketItem.id === item.id)
        if (basket[index].count !=1) basket[index].count--
        else if(basket[index].count < 1)localStorage.removeItem(basket[index])
        localStorage.setItem('basket', JSON.stringify(basket))
        counting(basket)

        createManyCards(basket)

    }
    function countP(basketItem) {
        const basket = JSON.parse(localStorage.getItem('basket')) || []
        //    itemIn.count--
        console.log(basketItem)
        const index = basket.findIndex(item => basketItem.id === item.id)

        basket[index].count++
        localStorage.setItem('basket', JSON.stringify(basket))
        counting(basket)

        createManyCards(basket)
    }


}
// let cards = [
//     {
//         name: 'Торт "Rosse"',
//         price: 390
//     },
// ]
export { korz }