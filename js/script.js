const wizard = {
    name: 'Пендальф',
    sayMyName() {
        return this.name
    }
}

const developer = {
    name: 'Стив Балман',
    sayMyName() {
        return this.name
    }
}

console.log(developer.sayMyName())
console.log(wizard.sayMyName())