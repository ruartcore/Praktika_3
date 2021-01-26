    function loadImages(source) {
                let image = null;
                    image = new Image();
                    image.src = source;
                    image.onload = function (e) {
                             return image;
                    };
            }

