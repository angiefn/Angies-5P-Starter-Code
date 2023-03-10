let main = document.querySelector(".title");
let q1 = document.querySelector(".question1");
let q2 = document.querySelector(".question2");
let results = document.querySelector(".result");
let cake = document.querySelector(".cake");
let donut = document.querySelector(".donut");
let egg = document.querySelector(".egg");
let enter = document.querySelector(".enter");
let img = document.querySelector(".imgs");
let hours;
let dessertChoice;
let result;


egg.onclick = function() {
    q1.style.display = "block";
    main.style.display = "none";
};

donut.onclick = function() {
	q2.style.display = "block";
    q1.style.display = "none";
    dessertChoice = "donut";
};

cake.onclick = function() {
	q2.style.display = "block";
    q1.style.display = "none";
    dessertChoice = "cake";
    
};

enter.onclick = function() {
	results.style.display = "block";
    q2.style.display = "none";
  hours = document.querySelector (".userInput").value;
    console.log(hours);
    let answer = document.querySelector (".answer");
    if (hours <= 7 && dessertChoice === "cake") {
    	answer.innerHTML = "Because you chose "+ dessertChoice + " and sleep for "+ hours + " hours, you are an omellete!";
        img.src="https://i.pinimg.com/564x/e9/d9/64/e9d96492a42ff848769ac16d26edb4d3.jpg";
    } else if(hours <= 7 && dessertChoice === "donut") {
    	answer.innerHTML = "Because you chose "+ dessertChoice + " and sleep for "+ hours + " hours, you are a soft boiled egg!";
        img.src="https://i.pinimg.com/564x/55/5c/89/555c89b950d11104e5d9fa417531706c.jpg";
    } else if (hours>= 8 && dessertChoice === "cake") {
	answer.innerHTML = "Because you chose "+ dessertChoice + " and sleep for "+ hours +  " hours, you are a scrambled egg!";
        img.src="https://i.pinimg.com/564x/b0/f5/c6/b0f5c68e5a787ffd1f6c2e49eca0dc15.jpg";
    } else if (hours>= 8 && dessertChoice === "donut") {
    answer.innerHTML = "Because you chose "+ dessertChoice + " and sleep for "+ hours + " hours, you are a sunny side up!";
        img.src="https://i.pinimg.com/564x/6a/9b/c5/6a9bc5e7cd382ee9c69083a6954ada2b.jpg";
    }
};
