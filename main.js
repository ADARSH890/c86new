var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var block_object="";
block_x=1;
block_y=1;
function new_image()
{fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
    block_object =Img;
    block_object.scaleToWidth(1200);
    block_object.scaleToHeight(700);
    block_object.set({ top:block_y, left:block_x });
    
    canvas.add(block_object);
        });
	
	
}

function my_song(){
	x.play();
}
