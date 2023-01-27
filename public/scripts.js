const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 6,
            questions: [
                {
                    question: "What is Vue JS?",
                    answers: {a: 'Programming Language', b: 'Directives', c: 'Scripting Language', d: 'A framework'},
                    correctAnswer: 'b'
                },
                {
                    question: "Vue.JS was created by which of the following companies?",
                    answers: {a: 'Facebook', b: 'Google', c: 'Microsoft', d: 'Samsung'},
                    correctAnswer: 'b'
                },
                {
                    question: "Which of the following is the full-form of MVVM?",
                    answers: {  a: 'Model-View-Value Model', b: 'Module-Value-View Model',
                                c: 'Model-View-View Model',  d: 'Model-View-View Module'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which of the following method does not represent the non-mutation?",
                    answers: {  a: 'Concat() Method', b: 'Reverse() Method',
                                c: 'Splice() Method',  d: 'None of the mentioned'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which keyword is used to create a constant in Vue.JS?",
                    answers: {  a: 'constant', b: 'int', c: 'const',  d: 'define'},
                    correctAnswer: 'c'
                },
                {
                    question: "What happens when a View Model is destroyed?",
                    answers: {  a: 'doesn’t affect even listeners', b: 'all event listeners are should be manually removed',
                                c: 'all event listeners are automatically removed',  d: 'none of the mentioned'},
                    correctAnswer: 'c'
                },
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
})

app.mount('#app')