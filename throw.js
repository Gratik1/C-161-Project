AFRAME.registerComponent("throw-balls", {
    init: function(){
        this.throwBalls();
    },
    throwBalls: function(){
        window.addEventListener("keydown", (e) => {
            if (e.key === "z") {
                var ball = document.createElement("a-entity");

                ball.setAttribute("geometry", {
                  primitive: "sphere",
                });
        
                ball.setAttribute("material", "color", "black");
        
                var cam = document.querySelector("#camera");
        
                pos = cam.getAttribute("position");
        
                ball.setAttribute("position", {
                  x: pos.x,
                  y: pos.y - 15,
                  z: pos.z + 2,
                });

                var camera = document.querySelector("#camera").object3D;

                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
        
                ball.setAttribute("velocity", direction.multiplyScalar(-10));
            }
        });
    },
});
