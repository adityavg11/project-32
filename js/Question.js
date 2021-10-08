class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");

this.input2=createInput("enter answer here....")

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
this.Question=createElement('h3')


this.option1=createElement('h4')
this.option2=createElement('h4')
this.option3=createElement('h4')
this.option4=createElement('h4')

this.message=createElement('h2')

  }


  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
   this.message.hide();

  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
this.Question.html("Question:what starts and ends with letter 'E',but has only one letter");
this.Question.position(100,90)
this.option1.html("1.Everyone")
this.option1.position(100,130)

this.option2.html("2.Envelope")
this.option2.position(100,150)
    
this.option3.html("3.Estimate")
this.option3.position(100,170)

this.option4.html("4.Example")
this.option4.position(100,190)


this.input1.position(150, 290);
    this.input2.position(400,290)
    this.button.position(290, 330);





    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
this.message.html("THANK YOU  your answer is submitted");
this.message.position(40,300)

      this.input1.hide();
      this.input2.hide();
      this.Question.hide();
      this.button.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();


    })


  }
}
