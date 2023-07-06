// 开始
let game = new Game();//初始化游戏
let silider = null;//设置滑块
let siliderNum = 0;
let jumper = null;// 设置跳跃目标
function init(time) {
    game.cxt.clearRect(0, 0, 300, 150);
    game.cxt.save();
    game.status = true; // 设置游戏状态
    createSilder(time);//创建滑块
    createJumper()// 创建跳跃目标
}
init();//初始化