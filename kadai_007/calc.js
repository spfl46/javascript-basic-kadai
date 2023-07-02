// 変数numにランダムな整数を代入する
let num = Math.floor(Math.random() * 100);
 
// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が３と５の倍数であれば、「３と５の倍数です」という文字列を出力する
if (num%3 == 0 && num%5 == 0) {
  console.log('3と5の倍数です');
}

// 変数numの値が３の倍数であれば、「３の倍数です」という文字列を出力する
else if (num%3 == 0) {
  console.log('3の倍数です');
}

// 変数numの値が５の倍数であれば、「５の倍数です」という文字列を出力する
else if (num%5 == 0) {
  console.log('5の倍数です');
}

else{
  console.log(num)
}
