var rectWidth = 2
var arr = []
var n = 0

function setup() {
  createCanvas(1920, 970)
  
  var indexesEntered = []
  
  for(var i = 0; i < width / rectWidth; i++){
	  var index = round(random(width / rectWidth))
	  var ok = true
	  for(var j = 0; j < indexesEntered.length; j++){
		  if(indexesEntered[j] === index){
			  ok = false
			  i--;
			  break
		  }
	  }
	  if(ok){
		  arr.push(index)
		  indexesEntered.push(index);
	  }
		  
  }
  
  n = arr.length
}

function update(){
	if(n != 0)
		bubbleSort(arr)
}

function draw() {
  update()
  background(51)
  noStroke()
  fill(182,255,165)
  textSize(32);
  text("Bubble Sort, Made by Tony Solomonik", width / 100, height / 20)
    
  for(var i = 0; i < arr.length; i++){
	  if(i === n)
		  fill(100, 0 ,255)
	  else
		  fill(255, 0, 100)
	  rect(i * rectWidth, height, rectWidth, -arr[i] * height / arr.length)
  }
}

function bubbleSort(arr) {
	var newn = 0
	for(var i = 1; i < arr.length; i++){
		if(arr[i - 1] > arr[i]){
			var temp = arr[i - 1]
			arr[i - 1] = arr[i];
			arr[i] = temp;
			newn = i;
		}
	}
	n = newn;
}