/*
* Запросим пользовательский ввод
* и сохраним комментарий в объект
*
* */
function getReview() {
    // Создадим объект комментария
    let comment = {}
    
    // Сохраним свойство имени
    comment["userName"] = prompt("Как вас зовут ?")
    if(comment["userName"] == null){
        return
    }
    
    // Сохраним текст комментария
    comment["comment"] = prompt("Напишите свой отзыв")
    if(comment["comment"] == null){
        return
    }
    
    // Сохраним текущее время
    comment["date"] = new Date().toLocaleString()

    if(confirm("Хотите, чтобы ваш комментарий могли оценить другие пользователи?")){
        let review = Object.create(comment)
        review["rate"] = 0

        writeReview(review)
        return
    }
    
    // Добавим на страницу
    writeReview(comment)
}

/*
* Запишем отзыв на страницу 
* 
* */
const writeReview = review => {
    let rate = ''

    if(Object.prototype.hasOwnProperty.call(review, 'rate')){
        rate = `<p>Рейтинг: ${review['rate']}</p>`
    }

    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>`  +
        rate +
        '</div>';
}
