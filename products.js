// products.js

// Используя массив products (файл products.js), необходимо решить ряд задач:

// 1. Отфильтруйте товары по условию, если их количество будет больше 10.
// 2. Найдите значение элемента массива (товара), чья цена находится в диапазоне от 800 до 900 включительно.
// 3. Отсортируйте данные товаров по цене (по убыванию)
// 4. Посчитайте итоговую стоимость всех товаров в массиве.
// 5. Преобразуйте массив таким образом, чтобы изменить сво-во marks и получить итоговую сумму оценок. 
// Пример для первой записи: 
// {id: 1, title: ‘велосипед’, price: 45000, count: 3, marks_total: 15}
// Итоговый результат отсортируйте по marks_total
 

// Примечание к работе:

// 1. В заданиях необходимо применить методы массива. В случае, если на решение не будет хватать времени - можно решить используя цикл for и условный оператор if (оценка будет снижена).
// 2. В последних заданиях предусмотрено использование нескольких методов (решение можно описать одной строкой)
// 3. Решение можно представить в виде набора методов console.log({метод массива}), или же сохранить результат в отдельную переменную, например task_1 (предпочтительнее)


let products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000,
        count: 3, // количество на складе
        marks: [4, 3, 5, 3] // оценки товара от 4х покупателей
    },
    {
        id: 2,
        title: 'ролики',
        price: 25000,
        count: 5,
        marks: [4, 3, 5, 5]
    },
    {
        id: 3,
        title: 'арбалет',
        price: 1700,
        count: 9,
        marks: [3, 3, 4, 5]
    },
    {
        id: 4,
        title: 'коньки',
        price: 4500,
        count: 3,
        marks: [4, 3, 4, 3]
    },
    {
        id: 5,
        title: 'ракетки',
        price: 900,
        count: 15,
        marks: [5, 3, 5, 3]
    },
    {
        id: 6,
        title: 'штанги',
        price: 14000,
        count: 5,
        marks: [3, 3, 3, 2]
    },
    {
        id: 7,
        title: 'стрелы',
        price: 1200,
        count: 55,
        marks: [3, 2, 4, 5]
    },
    {
        id: 8,
        title: 'мячи',
        price: 500,
        count: 49,
        marks: [5, 4, 4, 4]
    },
    {
        id: 9,
        title: 'сетка',
        price: 5000,
        count: 6,
        marks: [4, 5, 2, 5]
    },
    {
        id: 10,
        title: 'гантели',
        price: 3400,
        count: 12,
        marks: [3, 2, 4, 2]
    },
    {
        id: 11,
        title: 'маты',
        price: 16500,
        count: 7,
        marks: [4, 4, 4, 5]
    }
]


task_1 = products.filter((product) => product.count > 10)
console.log("Кол-во товаров больше 10")
console.log(task_1)

task_2 = products.filter((product) => product.price >= 800 && product.price <= 900)
console.log("\nЦена 800-900")
console.log(task_2[0])

task_3 = products.sort((a, b) => b.price - a.price)
console.log("\nТовары по убыванию цены")
console.log(task_3)

task_4 = products.reduce((a, b) => a + b.price, 0)
console.log(`\nИтоговая стоимость всех товаров: ${task_4}`)

task_5 = products.map(
    (product) => {
        let totalMark = 0
        totalMark += product.marks.reduce((a, b) => a + b, 0)
        delete product["marks"]
        product["marks_total"] = totalMark
        return product
    }
)
console.log("\nИтоговая сумма оценок")
console.log(task_5)
