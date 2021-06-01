var canvas = new fabric.Canvas('myCanvas')
block_image_object = ""
block_image_width = 30
block_image_height = 30
player_x = 10
player_y = 10
var player_object = ""
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y,
            left:player_x
        
        });canvas.add(player_object)
    })
}
function new_image(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        block_image_object = Img
        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top:player_y,
            left:player_x
        });canvas.add(block_image_object)
    })
}


window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
    Keypress = e.keyCode
    console.log(Keypress)
    if(e.shiftKey==true&&Keypress=='80'){
        console.log("shift key and p key pressed together")
        block_image_width += 10
        block_image_height += 10
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_height
    }
    if(e.shiftKey==true&&Keypress=='77'){
        console.log("shift key and m key pressed together")
        block_image_width -= 10
        block_image_height -= 10
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_height
    }
    if(Keypress=='38'){
        Up()
        console.log("up")
    }
    if(Keypress=='40'){
        Down()
        console.log("down")
    }
    if(Keypress=='37'){
        left()
        console.log("left")
    }
    if(Keypress=='39'){
        Right()
        console.log("right")
    }
    if(Keypress=='83'){
        new_image('spiderman_face.png')
        console.log("s")
    }
    if(Keypress=='72'){
        new_image('hulk_legs.png')
        console.log("h")
    }
    if(Keypress=='73'){
        new_image('ironman_right_hand.png')
        console.log("i")
    }
    if(Keypress=='84'){
        new_image('thor_left_hand.png')
        console.log("t")
    }
    if(Keypress=='77'){
        new_image('spiderman_body.png')
        console.log("m")
    }
}
    function Up(){
        if(player_y>=10){
            player_y = player_y-block_image_height
            console.log("Block image height = "+block_image_height)
            console.log("when up key is pressed then x = "+player_x+",y = "+player_y)
            canvas.remove(player_object)
            player_update()
            
        }
    }
    function Down(){
        if(player_y<=625){
            player_y = player_y+block_image_height
            console.log("Block image height = "+block_image_height)
            console.log("when down key is pressed then x = "+player_x+",y = "+player_y)
            canvas.remove(player_object)
            player_update()
            
        }
    }
    function Right(){
        if(player_x<=1350){
            player_x = player_x+block_image_width
            console.log("Block image width = "+block_image_width)
            console.log("when up key is pressed then x = "+player_x+",y = "+player_y)
            canvas.remove(player_object)
            player_update()
            
        }
    }
    function left(){
        if(player_x>=0){
            player_x = player_x-block_image_width
            console.log("Block image width = "+block_image_width)
            console.log("when up key is pressed then x = "+player_x+",y = "+player_y)
            canvas.remove(player_object)
            player_update()
            
        }
    }
