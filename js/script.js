$('document').ready(function () {
    $('.footer_content > p').append('Подписывайтесь: ' + '<a href="https://instagram.com">Instagram</a>' + ' ' + '<a href="https://facebook.com">Facebook</a>' + ' ' + '<a href="https://vk.com">Vk.com</a>' + ' ' + 'Я футер прибитый к низу!)')

    //Calculator

    let result = $('.result') // result field

    let submit = $('.submit') // submit button

    submit.on('click', function () {
        let value1 = parseInt($('.value1').val()) // value 1
        let value2 = parseInt($('.value2').val()) // value 2
        let sign = $('.sign').val() // sign field value

        switch (sign) {
            case '+':
                result.append(value1 + value2) // addition
                break
            case '-':
                result.append(value1 - value2) // subtraction
                break
            case '*':
                result.append(value1 * value2) // multiplication
                break
            case '/':
                result.append(value1 / value2) // division
                break
            default:
                result.append(null)
        }
    })
})

// reload page

let reset = $('.reset') // reset button

reset.on('click', function () {
    location.reload();
})

new TypeIt(".type-it", {
    speed: 50,
    startDelay: 900,
})
    .type("Simply clever calculator!!!", { delay: 100 })
    .go();