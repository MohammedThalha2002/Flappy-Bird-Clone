/** @type {HTMLCanvasElement} */

window.addEventListener('load', () => {
    const canvas = document.getElementById('bird')
    const ctx = canvas.getContext('2d')

    const sprite = new Image()
    sprite.src = './assets/images/sprite.png'

    const bird = {
        w: 34,
        h: 26,
        x: 50,
        y: 150,
        animaton: [
            { sX: 276, sY: 112, },
            { sX: 276, sY: 139, },
            { sX: 276, sY: 164, },
            { sX: 276, sY: 139, },
        ],
        frame: 0,
        draw: function () {
            let bird = this.animaton[this.frame]
            ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h,
                this.x - this.w / 2, this.y - this.h / 2,
                this.w, this.h
            )
        },
    }

    const background = {
        sX: 0,
        sY: 0,
        w: 276,
        h: 112,
        x: 0,
        y: canvas.height - 226,
        draw: function () {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h,
                this.x, this.y, this.w, this.h
            )
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h,
                this.x + this.w, this.y, this.w, this.h
            )
        }
    }

    const fg = {
        sX: 276,
        sY: 0,
        w: 224,
        h: 112,
        x: 0,
        y: canvas.height - 112,
        draw: function () {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h,
                this.x, this.y, this.w, this.h
            )
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h,
                this.x + this.w, this.y, this.w, this.h
            )
        }
    }

    const getReady = {
        sX: 0,
        sY: 228,
        w: 173,
        h: 152,
        x: canvas.width / 2 - 173 / 2,
        y: 80,
        draw: function () {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h,
                this.x, this.y, this.w, this.h
            )
        }
    }
    // GAME OVER MESSAGE
    const gameOver = {
        sX: 175,
        sY: 228,
        w: 225,
        h: 202,
        x: canvas.width / 2 - 225 / 2,
        y: 90,

        draw: function () {
            ctx.drawImage(sprite, this.sX, this.sY,
                this.w, this.h, this.x, this.y, this.w, this.h);

        }

    }

    const draw = () => {
        ctx.fillStyle = '#70c5ce'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        getReady.draw()
        fg.draw()
        background.draw()
        bird.draw()
    }


    const animate = () => {
        // upadte()
        draw()
        requestAnimationFrame(animate)
    }
    animate()
}) 