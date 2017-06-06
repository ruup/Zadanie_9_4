function drawTree (height) {
  for (i = 1; i <= height ; i ++) {
    var star = "";
    
    for (j = 0; j < i  ; j ++){
      star += "*";
    }
    console.log(star);
  }
}
drawTree(1);
drawTree(2);
drawTree(5);