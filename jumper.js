// 设置人物模型，只需要能操作跳跃就行。
function Jumper(residence) {
    this.top = 100;///人物模型定位距离顶部高度
    this.left = 30;// 人物模型离左边距离
    this.width = 20;// 人物模型宽度
    this.height = 10;// 人物模型高度
    this.jumpHeight = 0;// 调高数据
    this.maxJumpHeight = 34;//最高可跳高度
    this.color = "#0000ff";//填充颜色
    this.rise = false;//是否处于上升状态
    this.jumpStatus = false;//是否处理跳跃状态
    // 初始化绘制人物高度
    game.cxt.fillStyle = this.color; 
    game.cxt.fillRect(this.left, this.top, this.width, this.height)
    game.cxt.stroke();
    game.cxt.save();
    // 人物跳跃动画
    this.jump = function () {
        if (!game.status) {
            return false;
        }
        this.jumpStatus = true;
        // 清除固定位置的像素
        game.cxt.clearRect(this.left, this.top - this.jumpHeight, this.width, this.height);
        game.cxt.save();
        if (this.jumpHeight <= 0 && !this.rise) {
            this.jumpHeight == 0;
            // 重新绘制位置
            game.cxt.fillStyle = this.color;
            game.cxt.fillRect(this.left, this.top - this.jumpHeight, this.width, this.height)
            game.cxt.stroke();
            game.cxt.save();
            this.jumpStatus = false;
            
        } else {
            if (this.jumpHeight < this.maxJumpHeight && this.rise) {
                this.jumpHeight++;
            } else {
                this.jumpHeight--;
                this.rise = false;
            }
            // 重新绘制位置
            game.cxt.fillStyle = this.color;
            game.cxt.fillRect(this.left, this.top - this.jumpHeight, this.width, this.height)
            game.cxt.stroke();
            game.cxt.save();
            requestAnimationFrame(() => {
                this.jump()
            })
        }
    }
}
function createJumper(){
    jumper = new Jumper();
}