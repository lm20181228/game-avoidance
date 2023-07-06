// 设置滑块，也就是目标,需要经常刷新，但是不需要换位置和大小，只需要改变速度和停留时间就行了。
function RestSilider(residence) {
    this.residence = residence;
    this.speed = residence;
    this.right = 250;
    this.sillderSpeed = Math.ceil(Math.random() * 4);//滑块滑动的速度
    this.top = 100;
    this.height = 10;
    this.width = 20;
    colorArr = ["red", 'yeelow', "green", "#000", "pink"]
    this.color = colorArr[Math.ceil(Math.random() * 10)]
    game.cxt.fillStyle = this.color;
    game.cxt.fillRect(this.right, this.top, this.width, this.height)
    game.cxt.stroke();
    game.cxt.save();
    // 滑块滑动动画
    this.sillder = function () {
        if (!game.status) {
            return false;
        }
        // 清除固定位置的像素
        game.cxt.fillStyle = this.color;
        game.cxt.clearRect(this.right, this.top, this.width, this.height);
        game.cxt.stroke();
        game.cxt.save();
        if (this.right < 0) {
            // 重新绘制位置
            gameContiun();
        } else {
            this.right -= this.sillderSpeed
            // 重新绘制位置
            game.cxt.fillStyle = this.color;
            game.cxt.fillRect(this.right, this.top, this.width, this.height)
            game.cxt.stroke();
            game.cxt.save();
            requestAnimationFrame(() => {
                this.sillder()
            })
        }
        // 开启碰撞检测
        collisionDetection();
    }
}
function createSilder(time){
    silider = new RestSilider();
    if(time){
        setTimeout(() => {
            silider.sillder()
        }, time)
    }
    
}