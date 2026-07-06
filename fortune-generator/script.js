
//fortune box message
fortune = [
  "True wisdom comes not from knowledge, but from understanding.",
  "The only way to do great work is to love what you do.",
  "In the end, we will remember not the words of our enemies, but the silence of our friends.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Life is what happens when you're busy making other plans.",
  "Happiness is not something ready made. It comes from your own actions.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
"Rain is formed in the heavens and dies on earth, the process in between is called life"
];

random_fortune_number = Math.trunc(Math.random()*10);

fortune_text = document.getElementById("fortune-text");

fortune_text.textContent = fortune[random_fortune_number];



//button

btn1 = document.getElementById("btn-theme-1");
btn2 = document.getElementById("btn-theme-2");
btn3 = document.getElementById("btn-theme-3");
btn4 = document.getElementById("btn-theme-4");

//color pallette 1
font_col_1 = "rgb(69, 131, 147)";
background_col_1 = "rgb(255, 243, 200)"
border_col_1 = "rgb(229, 203, 144)"
font_size_1 = "18px";
font_family_1 = "Georgia";



//color pallette 2
font_col_2 = "rgb(29, 33, 40)";
background_col_2 = "rgb(255, 158, 32)"
border_col_2 = "rgb(33, 94, 97)"
font_size_2 = "20px";
font_family_2 = "Courier New";



//color pallette 3
font_col_3 = "rgb(238, 238, 238)"
background_col_3 = "rgb(47, 160, 132)"
border_col_3 = "rgb(31, 111, 95)"
font_size_3 = "22px";
font_family_3 = "Verdana";



//color pallette 4
font_col_4 =" rgb(228, 211, 41)";
background_col_4 = "rgb(41, 70, 105)";
border_col_4 ="rgb(13, 11, 97)";
font_size_4 = "25px";
font_family_4 = "Times New Roman";

fortune_box = document.getElementById("fortune-box");


btn1.addEventListener("click", () => {
  fortune_text.style.color = font_col_1;
  fortune_box.style.borderColor = border_col_1;
  fortune_box.style.backgroundColor = background_col_1;
  fortune_text.style.fontSize = font_size_1;
  fortune_text.style.fontFamily = font_family_1;
});

btn2.addEventListener("click", () => {
    fortune_text.style.color = font_col_2;
  fortune_box.style.borderColor = border_col_2;
  fortune_box.style.backgroundColor = background_col_2;
  fortune_text.style.fontSize = font_size_2;
  fortune_text.style.fontFamily = font_family_2;

});

btn3.addEventListener("click", () => {
    fortune_text.style.color = font_col_3;
  fortune_box.style.borderColor = border_col_3;
  fortune_box.style.backgroundColor = background_col_3;
  fortune_text.style.fontSize = font_size_3;
  fortune_text.style.fontFamily = font_family_3;

});

btn4.addEventListener("click", () => {
    fortune_text.style.color = font_col_4;
  fortune_box.style.borderColor = border_col_4;
  fortune_box.style.backgroundColor = background_col_4;
  fortune_text.style.fontSize = font_size_4;
  fortune_text.style.fontFamily = font_family_4;
});