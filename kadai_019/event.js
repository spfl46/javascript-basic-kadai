// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);

// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
 
document.getElementById("btn").onclick = function() {
  document.getElementById("text").innerHTML = "ボタンをクリックしました";
};
