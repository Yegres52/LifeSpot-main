/*
* Сохраним текущий ввод пользователя в контекст кнопки
*
* */
function saveInput(){
    let currentInput = document.getElementsByTagName('input')[0].value
    let previousInput = this.previousInput || 'Предыдущего ввода нет'

    this.previousInput = currentInput

    alert('Текущий ввод: ' + currentInput + '\n' + 'Предыдущий ввод: ' + previousInput)
}
