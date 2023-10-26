<!doctype html>
<html lang="en" class="h-full">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./app.css">
    <title>Mko-Circle-Graphics</title>
</head>

<body class="h-full w-full flex flex-col items-center font-mono bg-[#f1f1f1]">
    <!--Canvas-->
    <div class="w-[80%] min-h-[55%] bg-yellow-600 mb-4 mt-10 flex justify-center items-center">

        <canvas id="solarSystem" width="400" height="400"></canvas>

    </div>
    <!--Circle inputs-->
    <div class="w-[50%] bg-white flex flex-col items-center gap-y-4 py-4">
        <div>Create parent and child circles</div>
        <form class="form flex flex-col items-center gap-y-4">
            <div class="flex flex-col items-center justify-center gap-y-4 circles">
                <div class="flex flex-row justify-start items-center gap-x-4">
                    <div>Circle 1</div>
                    <input type="number" name="circle_1" id="" min="1" max="10" class="border-2 border-black w-20 p-2" required>
                </div>

            </div>
            <div class="flex flex-row justify-center items-center gap-x-2">
                <button class="bg-blue-200 rounded-md p-2 add-circle w-[120px]">Add circle</button>
                <button class="bg-blue-200 rounded-md p-2 reset-all w-[120px]">Reset</button>
                <button class="bg-blue-200 rounded-md p-2 render w-[120px]" type="submit">Render</button>
            </div>
        </form>
    </div>
    
</body>
<script src="./js/main.js">

</script>

</html>