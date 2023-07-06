// 设置初始化画布和初始化参数
function Game() {
    this.gradeElem = document.getElementsByClassName('grade')[0];// 分数对象
    this.canvas = document.getElementById('canvas');// 画布对象
    this.cxt = this.canvas.getContext('2d');// 画布2d
    this.grade = 0;// 初始分数
    this.status = true;// 游戏进程是否正常 false为不正常
    // 画布点击事件
    this.canvas.onclick = function (e) {
        if (jumper.jumpStatus) {
            return false;
        }
        requestAnimationFrame(() => {
            jumper.rise = true;
            jumper.jump();
        })
    }
}
// 设置分数
function setGrade(grade) {
    game.grade++;
    game.gradeElem.innerHTML = game.grade;
}
// 设置分数
function resetGrade() {
    game.grade = 0;
    game.gradeElem.innerHTML = game.grade;
}
// 游戏结束
function gameOver() {
    alert("游戏结束")
}
//碰撞检测，失败停止游戏，成功继续游戏并积分
function collisionDetection() {
    if (silider.right <= jumper.left + jumper.width && silider.right >= jumper.left - silider.width) {
        // 在这个区间进行碰撞校验 
        if (jumper.jumpHeight <= silider.height) {
            game.status = false;
            gameOver();
        }
    }
}
// 游戏继续
function gameContiun() {
    setGrade();
    createSilder(500);
}
// 开始游戏，滑块运动
function startGame(time) {
    // 动画初始化
    silider.sillder();
    document.getElementsByClassName('start-game')[0].setAttribute('hidden','hidden')
    document.getElementsByClassName('reset-game')[0].removeAttribute('hidden')
}
// 游戏重新开始，重新初始化，重置分数，并开启游戏
function resetGame(time) {
    // 动画初始化
    init(time);
    resetGrade();
}