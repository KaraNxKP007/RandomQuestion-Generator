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
    // we need to select question and random question 1 q should not be repeated so use set

/*    const data=new Set()
    while(data.size!=5)
    {
        const index=Math.floor(Math.random()*questionbank.length)
        data.add(questionbank[index]) // we want to add the object questions
    }

    return [...data]

*/

//*********************Here we will write  approach************************ */
// O(nlogn) time complexity more worse than previous

        // questionbank.sort(()=>Math.random()-0.5)
        // return questionbank.slice(0,5)

// ****************** Fischer Algorithm ******************** O(n) time complexity
    // 1) step create the required array of 5 element which we want to return
    const required_arr=[]
    // 2) length of the question array
    let length=questionbank.length
    // 3) for loop operation for selecting 5 question
    for(let i=0;i<5;i++)
    {
        const index=Math.floor(Math.random()*length)

        // 4) push the selected indexed element to array
        required_arr.push(questionbank[index])

        // 5) swapping the last and current indexed element
        [questionbank[index],questionbank[length-1]]=[questionbank[length-1],questionbank[index]]

        //6) decreasing the length
        length--
    }

    return required_arr
}

console.log(RandomQuestion())

// select the form first
const form=document.querySelector('form')

// creating an object with original answer
const original_answer={}


// store the randomly generated 5 questions number 
const question_number_generated=RandomQuestion()

question_number_generated.forEach((obj,index)=>{

    // stroing the correct answer in the original_answer object
    original_answer[`q${index+1}`]=obj.correctAnswer


     //create div element with classname
    const div_element=document.createElement('div')
    div_element.className="question"

    // create a p for storing question info
    const p_question=document.createElement('p')

    //store the question
    p_question.textContent=`Q${index+1}. ${obj['question']}`

    //append the question to it's div
    div_element.appendChild(p_question)


    //create 4 options
    obj.options.forEach((option)=>{

        //create label and radio input options

        const label=document.createElement('label')
        const radio_input=document.createElement('input')
        radio_input.type='radio'
        radio_input.name=`q${index+1}`
        
        //each array option being attached with it's value
        radio_input.value=option

        //putting input inside label
        label.appendChild(radio_input)

        //labelling each option
        label.appendChild(document.createTextNode(option))

        //label has been created now append it to it's div
        div_element.appendChild(label)
        div_element.appendChild(document.createElement('br'))
    })


    //after succesfully creating one question we must append the div to form
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
