class Enemy{
  constructor(direction, id, speed, posx, posy){
    this.direction = direction;// direction 1 is up direction 2 is down direction 3 is to the right direction 4 is to the left
    this.id = id;
    this.speed = speed;
    this.isPlaying = true;
    this.x = posx;
    this.y = posy;
  }

  loadEnemy(){
    window.requestAnimationFrame(function loop(){
      var enemy = document.getElementById("enemySprite");
      ctx.drawImage(enemy,posx, posy,30,40);
      ctx.restore();
      context.translate(0,10);
      window.requestAnimationFrame(loop);
      ctx.restore();
      context.save();
  }
  move(){
    var enemy = document.getElementById(this.id);
    while(this.play()){// checks whether game is running
      if(this.hitWall()){
        this.changeDirection();
      }
      if (direction == 1){
        enemy.translate(0, speed);
      }
      if (direction == 2){
        enemy.translate(0, speed*-1);
      }
      if (direction == 3){
        enemy.translate(speed, 0);
      }
      if (direction == 4){
        enemy.translate(speed*-1, 0);
      }
    }
  }
  play(){
    int = setTimeout(this.makeFalse(), 1000);
  }
  makeFalse(){
    this.isPlaying = false;
  }
  changeDirection(){
    if (this.direction<=2){
      this.direction = this.direction+2;
    }
    else(){
      this.direction = this.direction-2;
    }
  }
}
