/*
* Запросим пользовательский ввод
* и сохраним комментарий в объект
*
* */
function Comment() {
    
    // Сохраним свойство имени
    this.userName = prompt("Как вас зовут ?")
    if(this.userName == null){
        return
    }
    
    // Сохраним текст комментария
    this.comment = prompt("Напишите свой отзыв")
    if(this.comment == null){
        return
    }
    
    // Сохраним текущее время
    this.date = new Date().toLocaleString()
}

/*
* Запросим пользовательский ввод
* и сохраним комментарий в объект
*
* */
function getReview() {
    // Создадим объект комментария
    let comment = new Comment()

    if(comment.userName == null || comment.comment == null){
        return
    }

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
        let rateId = `rate-${Date.now()}`
        rate = `<p><button onclick="addLike('${rateId}')">❤️</button> Рейтинг: <span id="${rateId}">${review['rate']}</span></p>`
    }

    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>`  +
        rate +
        '</div>';
}

/*
* Увеличим рейтинг отзыва
*
* */
function addLike(id){
    let rate = document.getElementById(id)
    rate.innerText = Number(rate.innerText) + 1
}
