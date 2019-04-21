// pages/testcom/testcom.js
Component({
  properties:{
    totest:{
      type:String,
      default:""
    }
  },
  data:{
    child:""
  },
  methods:{
    send(){
      this.triggerEvent("get",{child:"i am child"})
      // this.triggerEvent("get",{child:this.data.child})
    }
  }
})