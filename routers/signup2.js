const route=require('express').Router()
route.get('/',function(req,res,next){
    res.send(
        `<html lang="en"><head>
        <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sign Up</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Source+Code+Pro:700" rel="stylesheet">
    <style>
    body{
        background:url('https://www.optimecare.com/wp-content/uploads/2016/06/medical-background.png');
        background-size:cover;
        font-family: Montserrat;
    }
    .wrap{
        width:350px;
        border-radius:20px;
        margin:auto;
        background:black;
        box-sizing: border-box;
        padding:40px;
        color:white;
        margin-top:50px;
    }
    h2{
        text-align:center;
    }
    ::placeholder {
        color: white;
      }
    input[type=text],input[type=password],input[type=date],input[type=email]
    {
        width:100%;
        box-sizing:border_box;
        font-family: Montserrat;
        padding:12px 5px;
        background:#79bfce;
        border-bottom:1px dotted #fff;
        color:white;
        border-radius:5px;
        margin:5px;
        font-weight:bold;
    }
    
    .button
    {
        width: 100%;
        font-family: Montserrat;
        box-sizing: border-box;
        padding :10px;
        margin-top:30px;
        font-weight: bold;
        background:#79bfce;
        border-radius:20px;
        font-size:20px;
        color:black;
    }
    .button:hover
    {
        color:rgb(65, 25, 25);
    }
    
    
    </style>
    
</head>
<body>
    <div class="wrap">
        <h2>Sign Up Here</h2>
        <form method="post" action="/signup1">
            <input type="text" id="my" placeholder="Child's Name" name="cname">
            <input type="date" name="dob" >
            <input type="text" placeholder="Parent's Name" name="pname">
            <input type="text" placeholder="Contact Number" name="cnumber">
            <input type="email" placeholder="Email" name="email">
            <input type="text" placeholder="Username" name="uname">
            <input type="password" placeholder="Password" name="pwd">
            <button class="button" type="submit" value="Sign Up">Sign Up</button>
        </form>
    </div>
</body>
</html>
        `
    )
})
exports = module.exports = route