<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><Button></Button></title>
    <link rel="stylesheet" href="heelo.css">
  <style>
   body {
     background-color: gold;
 }

 .but {
     background-color: aqua;
     border-radius: 17%;
     font-family: monospace;
     border: 2px solid black;
     color: black;
     padding: 14px 28px;
     cursor: pointer;

     margin-bottom: 4px;
     margin-right: 1px;
     position: relative;
     transition: 0.4s;
 }


 .but:hover {
     background-color: magenta;
     border-color: black color;
 }

 .but:active {
     background-color: orange;
     transform: scale(0.90);
 }
  </style>
  
</head>

<body>
    <p>Cart quantity is : </p>
    <button title="do not click" class="but" onclick="console.log(`kart quantity is : ${inc}`);">Show quantity</button>
    <button title="do not click" class="but" onclick=" inc++; console.log(`kart quantity is : ${inc}`);">Add to
        kart</button>
    <button title="do not click" class="but" onclick=" inc += 2;console.log(`kart quantity is : ${inc}`);">+2</button>
    <button title="do not click" class="but" onclick=" inc += 4;console.log(`kart quantity is : ${inc}`);">+4</button>
    <button title="do not click" class="but"
        onclick=" inc = 0;console.log(`Cart was reset.`); console.log(`kart quantity is : ${inc}`);">EMpty
        kart</button>


    <script>

        // alert(" Announcement:\nproblem number 4 has been changed ");
        let inc = 0;
        // console.log(inc)
        // console.log(2 + 2);
        // console.log('name' + 'is' + 'gaurav' + 'kumar');
        // console.log(inc);
        // alert('Demn we are making it'); 
    </script>

</body>

</html>
