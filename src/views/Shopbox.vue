<template>
  <div>
    <Table :columns="columnShop" :data="dataShop" v-if="dataShop.length"></Table>
    <div v-else>购物车暂无数据</div>
    <Modal v-modal="removeModal">
      <p slot="header"></p>
      <div>确定删掉此商品吗？</div>
      <div slot="footer">
        <Button type="primary" @click="confirmRemove">YES</Button>
        <Button type="primary" @click="cancelRemove">NO</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "shopBox",
  data() {
    return {
      columnShop: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "name",
          key: "name"
        },
        {
          title: "price",
          key: "price"
        },
        {
          title: "number",
          key: "number"
        },
        {
          title: "operate",
          key: "operate",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",
                    shape: "circle"
                  },
                  on: {
                    click: () => {
                      this.addNumber(params.index);
                    }
                  }
                },
                "增加"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "warning",
                    size: "small",
                    shape: "circle"
                  },
                  on: {
                    click: () => {
                      this.reduceNumber(params.index);
                    }
                  }
                },
                "减少"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small",
                    shape: "circle"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        },
        {
          title: "totalPrice",
          key: "totalPrice",
          render: (h, params) => {
            return h("div", {}, params.row.price * params.row.number);
          }
        }
      ],
      dataShop: [
        {
          name: "vue.js",
          price: "66",
          number: 0
        },
        {
          name: "vue.js",
          price: "66",
          number: 0
        },
        {
          name: "vue.js",
          price: "66",
          number: 0
        },
        {
          name: "vue.js",
          price: "66",
          number: 0
        },
        {
          name: "vue.js",
          price: "66",
          number: 0
        }
      ],
      removeModal: false
    };
  },
  methods: {
    //   增加数量
    addNumber(index) {
      this.dataShop[index].number++;
    },
    // 减少数量
    reduceNumber(index) {
      this.dataShop[index].number--;
    },
    //删除该商品
    remove(index) {
      this.removeModal = true;
    },
    confirmRemove() {},
    cancelRemove() {
      this.removeModal = false;
    }
  }
};
</script>