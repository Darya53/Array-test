const question_arr = [
    'Яке значення коефіцієнту кореляції віповідає найкращій моделі?',
    'Що таке гетероскедастичність?',
    'Для виявлення мультиколлінеарності використовують:',
    'У якому випадку проблеми мультиколлінеарності не існує:',
    'Скільки фіктивних змінних треба ввести, якщо якісна зміна має k альтернативних значень?'
]
const a1_arr = [
    '-0,9',
    'Кореляція залишків між собою',
    'Метод Голдфелда-Квандта',
    'F_кр > F_розр',
    'k-1'
]
const a2_arr = [
    '0,8',
    'Непостійна дисперсія',
    'Критерій Кохрана-Оркатта',
    'F_кр < F_розр',
    'k'
]
const a3_arr = [
    '0,2',
    'Постійна дисперсія',
    'Критерій Дарбіна-Уотсона',
    'F_кр = F_розр',
    'k+1'
]
const a4_arr = [
    '-0,5',
    "Взаємозв'язок між двома або більше пояснювальних змінних",
    'Метод Феррара-Глобера',
    'F_кр >= F_розр',
    'k+2'
]
const answer_arr = [
    '-0,9',
    'Непостійна дисперсія',
    'Метод Феррара-Глобера',
    'F_кр > F_розр',
    'k-1'
]
const n_right_answer_arr = [1, 2, 4, 1, 1]

let right_answers = 0
let n_answer = 4

question.innerHTML = question_arr[n_question.value]
answer.innerHTML = answer_arr[n_question.value]
n_right_answer = n_right_answer_arr[n_question.value]

a1.innerHTML = a1_arr[n_question.value]
a2.innerHTML = a2_arr[n_question.value]
a3.innerHTML = a3_arr[n_question.value]
a4.innerHTML = a4_arr[n_question.value]

btn.addEventListener('click', f_out)
btn1.addEventListener('click', f_out1)
btn2.addEventListener('click', f_out2)

function f_out() {
    if (y1.checked) {
        n_a = 1
    }
    if (y2.checked) {
        n_a = 2
    }
    if (y3.checked) {
        n_a = 3
    }
    if (y4.checked) {
        n_a = 4
    }

    if (n_a == n_right_answer) {
        right_answers += 1
        right_div.classList.remove('hidden')
        wrong_div.classList.add('hidden')

        if (n_question.value == n_answer) {
            btn2.classList.add('hidden')
            alert(`У вас ${right_answers} правильні відповіді`)
        }
    } else {
        right_answers -= 1
        right_div.classList.add('hidden')
        wrong_div.classList.remove('hidden')
    }
}

function f_out1() {
    console.log(btn1);
    answer.classList.toggle('hidden')
    btn1.classList.toggle('opend')
}

function f_out2() {
    right_div.classList.add('hidden')
    k = Number(n_question.value)
    k += 1
    n_question.value = k
    question.innerHTML = question_arr[n_question.value]
    a1.innerHTML = a1_arr[n_question.value]
    a2.innerHTML = a2_arr[n_question.value]
    a3.innerHTML = a3_arr[n_question.value]
    a4.innerHTML = a4_arr[n_question.value]
    answer.innerHTML = answer_arr[n_question.value]

    n_right_answer = n_right_answer_arr[n_question.value]
}
