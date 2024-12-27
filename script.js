const questionbank = [
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Brian Lara"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "Which country won the first Cricket World Cup in 1975?",
        options: ["Australia", "India", "West Indies", "England"],
        correctAnswer: "West Indies"
    },
    {
        question: "Who holds the record for the fastest century in ODIs?",
        options: ["Virat Kohli", "AB de Villiers", "Chris Gayle", "Shahid Afridi"],
        correctAnswer: "AB de Villiers"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
        correctAnswer: "Muttiah Muralitharan"
    },
    {
        question: "Who is the only cricketer to score 100 international centuries?",
        options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "Which Indian player is nicknamed 'The Wall'?",
        options: ["MS Dhoni", "Rahul Dravid", "Virat Kohli", "Sourav Ganguly"],
        correctAnswer: "Rahul Dravid"
    },
    {
        question: "What is the maximum score a batsman can achieve in a single delivery?",
        options: ["4", "6", "5", "7"],
        correctAnswer: "6"
    },
    {
        question: "Who won the ICC Cricket World Cup 2019?",
        options: ["England", "New Zealand", "India", "Australia"],
        correctAnswer: "England"
    },
    {
        question: "Which cricketer is known for hitting six sixes in an over in T20 cricket?",
        options: ["Yuvraj Singh", "Chris Gayle", "Kieron Pollard", "Rohit Sharma"],
        correctAnswer: "Yuvraj Singh"
    },
    {
        question: "Who was the captain of India during the 1983 Cricket World Cup victory?",
        options: ["Kapil Dev", "Sunil Gavaskar", "Ravi Shastri", "Mohinder Amarnath"],
        correctAnswer: "Kapil Dev"
    },
    {
        question: "Which Australian cricketer is nicknamed 'Pup'?",
        options: ["Ricky Ponting", "Michael Clarke", "Steve Smith", "David Warner"],
        correctAnswer: "Michael Clarke"
    },
    {
        question: "Which country has won the most ICC Cricket World Cups?",
        options: ["India", "Australia", "West Indies", "England"],
        correctAnswer: "Australia"
    },
    {
        question: "Who was the first player to score a double century in ODIs?",
        options: ["Rohit Sharma", "Virender Sehwag", "Sachin Tendulkar", "Chris Gayle"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "Which cricketer is known as the 'Universal Boss'?",
        options: ["Chris Gayle", "Dwayne Bravo", "Kieron Pollard", "Andre Russell"],
        correctAnswer: "Chris Gayle"
    },
    {
        question: "Which Indian cricketer holds the record for the highest individual score in ODIs?",
        options: ["Rohit Sharma", "Sachin Tendulkar", "Virender Sehwag", "MS Dhoni"],
        correctAnswer: "Rohit Sharma"
    },
    {
        question: "Who was the first player to take a hat-trick in a World Cup match?",
        options: ["Chetan Sharma", "Kapil Dev", "Zaheer Khan", "Wasim Akram"],
        correctAnswer: "Chetan Sharma"
    },
    {
        question: "Who holds the record for the fastest 50 in T20 Internationals?",
        options: ["Chris Gayle", "Yuvraj Singh", "Glenn Maxwell", "AB de Villiers"],
        correctAnswer: "Yuvraj Singh"
    },
    {
        question: "Which stadium is known as the 'Home of Cricket'?",
        options: ["Eden Gardens", "Lords", "MCG", "Wankhede Stadium"],
        correctAnswer: "Lords"
    },
    {
        question: "Who was the first cricketer to reach 10,000 runs in Test cricket?",
        options: ["Allan Border", "Sunil Gavaskar", "Sachin Tendulkar", "Steve Waugh"],
        correctAnswer: "Sunil Gavaskar"
    },
    {
        question: "Which bowler is known as the 'Sultan of Swing'?",
        options: ["Wasim Akram", "Waqar Younis", "James Anderson", "Glenn McGrath"],
        correctAnswer: "Wasim Akram"
    }
];

// randomly selecting

function RandomQuestion(){

    const required_arr=[]
    let length=questionbank.length
    for(let i=0;i<5;i++)
    {
        const index=Math.floor(Math.random()*length)
        required_arr.push(questionbank[index])
        [questionbank[index],questionbank[length-1]]=[questionbank[length-1],questionbank[index]]
        length--
    }

    return required_arr
}

console.log(RandomQuestion())

const form=document.querySelector('form')
const original_answer={}
const question_number_generated=RandomQuestion()

question_number_generated.forEach((obj,index)=>{

    original_answer[`q${index+1}`]=obj.correctAnswer
    const div_element=document.createElement('div')
    div_element.className="question"
    const p_question=document.createElement('p')
    p_question.textContent=`Q${index+1}. ${obj['question']}`
    div_element.appendChild(p_question)
    obj.options.forEach((option)=>{

        const label=document.createElement('label')
        const radio_input=document.createElement('input')
        radio_input.type='radio'
        radio_input.name=`q${index+1}`
    
        radio_input.value=option
        label.appendChild(radio_input)
        label.appendChild(document.createTextNode(option))
        div_element.appendChild(label)
        div_element.appendChild(document.createElement('br'))
    })

    form.appendChild(div_element)
})

// attaching a submit button
const submit_button=document.createElement('button')
submit_button.type='submit'
submit_button.textContent='Submit'

form.appendChild(submit_button)

// checking the submitted form


form.addEventListener('submit',(event)=>{
    event.preventDefault()

    const form_data=new FormData(form)
    let score=0
    for(let [keys, values] of form_data.entries())
    {
        if(values===original_answer[keys])
        {
            score+=1
        }
        console.log(keys, values)
    }

    console.log(original_answer)
    const user_score=document.getElementById('score')
    user_score.innerText=`Your Score : ${score}/5`

})
