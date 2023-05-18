const discountsItems = document.querySelector('.discounts__items')

animals.forEach((animal)=> {
    let discountsItem = document.createElement('div')
    discountsItem.setAttribute('class', "discounts__item")
    let img = document.createElement('img')
    img.setAttribute('src',`${animal.image}`)
    let text = document.createElement('p')
    text.textContent = animal.description
    let bought = document.createElement('span')
    bought.textContent = `${animal.bought} ta odam a'lo baxolagan !`
    let weight = document.createElement('span')
    weight.textContent = `${animal.weight} kg`

    discountsItem.append(img)
    discountsItem.append(text)
    discountsItem.append(bought)
    discountsItem.append(weight)

    discountsItems.append(discountsItem)
})