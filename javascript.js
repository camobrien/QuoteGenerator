var quotes = ["It's not the size of the dog in the fight, but the size of the fight in the dog. - Archie Griffen",
 "Nothing lasts forever. Not even your troubles. - Arnold H Glasgow",
 "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. - Albert Einstein",
"Take chances, make mistakes. That's how you grow. Pain nourishes your courage. You have to fail in order to practice being brave. - Mary Tyler Moore",
"Being strong means rejoicing in who you are, complete with imperfections. - Margaret Woodhouse",
"If you dont go after what you want, you will never have it. If you dont ask, the answer is always no. If you dont step forward, you are always in the same place. - Nora Roberts",
"I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. - Michael Jordan",
"The only place you find success before work is in the dictionary. - May V Smith", "You are going to fail your way to success, you have nothing to be ashamed of so keep your head up. It is much easier to come up with excuses of why you can't do it. If you do what is easy your life will be hard. - Les Brown",
"A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing. - George Bernard Shaw",
"Nobody can make you feel inferior without your consent. - Eleanor Roosevelt",
"It took me a long time not to judge myself through someone else's eyes. - Sally Field",
"Hope never abandons you, you abandon it. - George Weinberg"]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

var i = 0; //first image
var images = [];
var time = 2000; // time between each images

// image list
images[0] = 'albert.jpg';
images[1] = 'mj.jpg';
images[2] = 'eleanor.jpeg';
images[3] = 'stevejobs.png';

//function to change images
function changeImg(){
  document.slide.src = images[i]
  if(i < images.length - 1){
    i++;
  } else {
    i = 0
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
