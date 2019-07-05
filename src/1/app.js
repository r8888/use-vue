/**
 * Vue通过props传方法，（逻辑统一在父组件处理的尝试）
 */
Vue.component("HelloWorld", {
  props: {
    handleClick: {
      require: true,
      type: Function
    },
    mounted: {
      require: true,
      type: Function
    },
    msg: {}
  },
  data() {
    return {
      orders: [
        { id: 1, name: 1, check: false },
        { id: 2, name: 2, check: false }
      ]
    }
  },
  template: `
    <div>
      {{msg}}
      <br/>
      <div 
        v-for="order in orders" :key="order.id" 
        @click="handleClick(orders,order)" 
        style="height:80px;"
        :style="{'background-color':order.check?'red':'','color':order.check?'#fff':''}"
      >
        {{order.name}}
      </div>
    </div>
  `,
  mounted() {
    this.mounted(this.orders)
  }
})
const app = new Vue({
  el: "#app",
  data() {
    return {
      msg: "123"
    }
  },
  methods: {
    handleClick(orders, order) {
      orders.forEach(order => (order.check = false))
      order.check = true
    },
    mounted(orders) {
      orders[0].check = true
    }
  }
})
