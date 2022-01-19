var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var block_image_object = ""

function new_image()
{
	fabric.image.fromURL('https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2020/03/Birthday-Wishes.jpg', function(img){
        block_image_object = img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToheight(510);
        block_image_object.set({
            top:0,
            left:0
        });
canvas.add(block_image_object);
    });
}


function playSound(){
	x.play();
}