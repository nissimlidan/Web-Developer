var start = new Date().getTime();

            var bestTime = 1000;

            function makeShapeAppear() {

                var top =  Math.random() * 370;

                var left = Math.random() * 1000;

                var widthAndHeight = (Math.random() * 170) + 50;

                var borderRadius = Math.random() * 60;

                document.getElementById("shape").style.top = top + "px";

                document.getElementById("shape").style.left = left + "px";

                document.getElementById("shape").style.width = widthAndHeight + "px";

                document.getElementById("shape").style.height = widthAndHeight + "px";

                document.getElementById("shape").style.backgroundColor = getRandomColor();

                document.getElementById("shape").style.borderRadius = borderRadius + "%";

                document.getElementById("shape").style.display = "block";

                start = new Date().getTime();

            }

            function appearAfterDelay() {

                setTimeout(makeShapeAppear, Math.random() * 2000);

            }

            function getRandomColor() {

                var letters = '0123456789ABCDEF';

                var shapeBackgroundColor = '#';

                for (var i = 0; i < 6; i++) {

                    shapeBackgroundColor += letters[Math.floor(Math.random() * 16)];
                }

                return shapeBackgroundColor;

            }

            function bestTimeFunc(correntTime){

                if(correntTime < bestTime){

                    bestTime = correntTime;
    
                }

                return (bestTime);
            }

          appearAfterDelay();

          document.getElementById("shape").onclick = function() {

                document.getElementById("shape").style.display = "none";

                var end = new Date().getTime();

                var timeTaken = (end-start) / 1000;

                bestTime = bestTimeFunc(timeTaken);

                document.getElementById("timeTaken").innerHTML = timeTaken + 's';

                document.getElementById("bestTime").innerHTML = bestTime + 's';

                document.getElementById("shape").style.display = "none";

                timeTaken = new Date().getTime;

                appearAfterDelay();
            }