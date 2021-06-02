<template>
  <div class="about">
    <div>{{positionX+'——'+positionY}}</div>
    <div class="per" ref="per">
      <div class="main" ref="main">
        <div class="canvas" ref="canvas"></div>
        <div class="delimg" @click="delimg">删除选中图标1</div>
      </div>
      <div class="box" ref="box">
        <div class="imgs" @click='establish($event,0)'>
          <img src="../assets/images/testimg/dianwei.png"/>
        </div>
        <div class="imgs" @click='establish($event,1)'>
          <img src="../assets/images/testimg/dl1.png"/>
        </div>
        <div class="imgs" @click='establish($event,2)'>
          <img src="../assets/images/testimg/dldj.png"/>
        </div>
        <div class="imgs" @click='establish($event,3)'>
          <img src="../assets/images/testimg/dlmr.png"/>
        </div>
        <div class="imgs" @click='establish($event,4)'>
          <img src="../assets/images/testimg/dtp.png"/>
        </div>
        <div class="imgs" @click='establish($event,5)'>
          <img src="../assets/images/testimg/hdszd.png"/>
        </div>
        <div class="imgs" @click='establish($event,6)'>
          <img src="../assets/images/testimg/hdszw.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'About',
  components: {

  },
  data(){
    return {
      positionX:0,
      positionY:0,
      tagindex:1,
      tagarry:[],
      selectindex:0,
    }
  },
  mounted(){
    // let box = this.$refs.box
    // let children = box.children
    // children.forEach((item,index)=>{
    //   let left = 0
    //   let top = 0
    //   let row = index%19
    //   let column = Math.floor(index/19)
    //   item.style.left = row*90 + 'px';
    //   item.style.top = column*90 + 500 + 'px';
    // })
  },
  methods:{
    establish(e,index){
      let canvas = this.$refs.canvas
      let box = this.$refs.box //box元素
      let children = box.children //box元素的子元素

      let tag = document.createElement('div'); //创建tag角标元素
      // tag.classList.add('tagindexclass');
      tag.style = 'width: 15px;height: 15px;position: absolute;left: -5px;top: -5px;background: #C7C5C5;font-size: 14px;font-weight: 500;color: #303233;line-height: 15px;border-radius: 50%;text-align: center;'
      tag.innerHTML = this.tagindex
      children.forEach((item,i)=>{
        if(index == i){
          let node = item.cloneNode(true)
          node.setAttribute('tag-index',this.tagindex);
          node.classList.add('absolute');
          node.addEventListener('mousedown', (e) => {
            this.move(e)
          })
          // node.addEventListener('click', (e) => {
          //   this.imgclick(e)
          // })
          node.appendChild(tag)
          this.tagarry.push({tagindex:this.tagindex})
          canvas.appendChild(node)
        }
      })
      this.tagindex++
    },
    delimg(){
      let canvas = this.$refs.canvas
      let children = canvas.children || []
      let selectindex = this.selectindex
      let tagarry = this.tagarry
      if(children.length){
        children.forEach((item,i)=>{
          let tagindex = item.getAttribute('tag-index')*1
          if(tagindex == selectindex){
            item.remove()
          }
        })
      }
      if(tagarry.length){
        tagarry.forEach((item,i)=>{
          if(item.tagindex == selectindex){
            tagarry.splice(i,1)
          }
        })
      }
    },
    move(e){
      let per = this.$refs.per
      let canvas = this.$refs.canvas
      let perLeft = per.offsetLeft
      let perTop = per.offsetTop
      let odiv = e.target.parentNode;        //获取目标父元素
      let odivoffsetLeft = odiv.offsetLeft
      let odivoffsetTop = odiv.offsetTop
      //算出鼠标相对元素的位置
      let disX = e.clientX - perLeft - odivoffsetLeft;
      let disY = e.clientY - perTop - odivoffsetTop;
      e.preventDefault()
      let children = canvas.children || []
      if(children.length){
        children.forEach((item,i)=>{
          item.classList.remove('addborder')
        })
        odiv.classList.add('addborder')
      }
      let selectindex = odiv.getAttribute('tag-index')*1
      this.$nextTick(()=>{
        this.$set(this,'selectindex',selectindex)
      })
      document.onmousemove = (event)=>{       //鼠标按下并移动的事件
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = event.clientX - disX - perLeft;
          let top = event.clientY - disY - perTop;
          // 绑定元素位置到positionX和positionY上面
          let minHeight = 0
          if(top<minHeight){//上边界
            top = minHeight;
          }
          if(left<0){//右边界
            left = 0;
          }
          let maxleft = canvas.clientWidth-odiv.clientWidth
          if(left>maxleft){//左边界
            left = maxleft
          }
          let maxHeight = canvas.clientHeight-odiv.clientHeight
          if(top>maxHeight){//下边界
            top = maxHeight
          }

          this.positionX = left;
          this.positionY = top;
          
          //移动当前元素
          odiv.style.left = left + 'px';
          odiv.style.top = top + 'px';
      };
      document.onmouseup = (event) => {

          document.onmousemove = null;
          document.onmouseup = null;
      };
    }
  }
}
</script>
<style lang="scss" scoped>
.per{
  margin-left: 100px;
  width: 90%;
  height: 700px;
  border: 1px solid red;
  position: relative;
  box-sizing: border-box;
}
.main{
  position: relative;
  .delimg{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 104px;
    height: 36px;
    background: linear-gradient(180deg, #04D7FA 0%, #044AFA 100%);
    border-radius: 18px;
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 36px;
    text-align: center;
    cursor: pointer;
  }
}
.canvas{
  height: 500px;
  position: relative;
  .absolute{
    position: absolute;
    left: 0;
    top:0;
    cursor: pointer;
    img{
      display: block;
      position: relative;
    }
  }
  .addborder{
    box-shadow: 0px 0px 15px 0px #0978E4;
  }
}
.box{
  width: 100%;
  height: 200px;
  border: 1px solid blue;
  // position: relative;
  display: flex;
  box-sizing: border-box;
  img{
    // margin-right: 10px;
    width: 80px;
    height: 80px;
    display: block;
    cursor: pointer;
  }
}
</style>