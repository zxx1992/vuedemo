<template>
  <div>
    <div v-if="dataShop.length">
      <Table
        :columns="columnShop"
        :data="dataShop"
        @on-select-all="handleSelectAll"
        @on-select="handleSelect"
        @on-select-cancel="handleCancel"
        @on-select-all-cancel="handleCancelAll"
      ></Table>
      <div class="totalPrices">总价： ${{totalPrices}}</div>
    </div>
    <div v-else>购物车暂无数据</div>
    <!-- 删除商品模态框 -->
    <Modal v-model="removeModal" class="removeModal">
      <p slot="header"></p>
      <div class="modalContent">确定删掉此商品吗？</div>
      <div slot="footer" class="modalFooter">
        <Button type="primary" @click="confirmRemove" class="modalBtn">YES</Button>
        <Button type="primary" @click="cancelRemove" class="modalBtn">NO</Button>
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
          type: "index",
          title: "number"
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
          title: "count",
          key: "count",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                    shape: "circle"
                  },
                  on: {
                    click: () => {
                      this.handleAdd(params.index);
                    }
                  }
                },
                "+"
              ),
              h("span", {}, params.row.count),
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                    shape: "circle",
                    disabled: params.row.count === 0 ? true : false
                  },
                  on: {
                    click: () => {
                      this.handleReduce(params.index);
                    }
                  }
                },
                "-"
              )
            ]);
          }
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
                    type: "error",
                    size: "small",
                    shape: "circle"
                  },
                  on: {
                    click: () => {
                      this.handleRemove(params.index);
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
            return h("div", [
              h("span", {}, params.row.price * params.row.count)
            ]);
          }
        }
      ],
      dataShop: [
        {
          name: "vue.js",
          price: "766",
          count: 0
        },
        {
          name: "vue.js",
          price: "666",
          count: 0
        },
        {
          name: "vue.js",
          price: "666",
          count: 0
        },
        {
          name: "vue.js",
          price: "666",
          count: 0
        },
        {
          name: "vue.js",
          price: "866",
          count: 0
        }
      ],
      removeModal: false, //删除模态框
      totalPrices: 0 // 总价钱
    };
  },
  methods: {
    init() {
      this.totalPrices = 0;
    },
    //   增加数量
    handleAdd(index) {
      this.dataShop[index].count++;
      this.init()
    },
    // 减少数量
    handleReduce(index) {
      // 这个判断是因为，如果我们没有用button，而是其他元素，div,span，则disabled属性不可用，所以这里加了双重判断
      if (this.dataShop[index].count === 0) return;
      this.dataShop[index].count--;
      this.totalPrices = 0;
    },
    //删除该商品
    handleRemove(index) {
      this.removeModal = true;
    },
    // 确认删除商品，table会重新渲染，这时候全选都取消，将总价钱只为初始值
    confirmRemove(index) {
      this.dataShop.splice(index, 1);
      this.removeModal = false;
      this.init();
    },
    cancelRemove() {
      this.removeModal = false;
    },
    // 全选
    handleSelectAll(selection) {
      this.getTotalPrices(selection);
    },
    // 选中某一项
    handleSelect(selection, row) {
      this.getTotalPrices(selection);
    },
    // 取消全选
    handleCancelAll(selection) {
      this.getTotalPrices(selection);
    },
    // 取消某一项
    handleCancel(selection, row) {
      this.getTotalPrices(selection);
    },
    getTotalPrices(selection) {
      this.init();
      selection.map((value, index) => {
        this.totalPrices += value.count * value.price;
      });
    }
  },
  computed: {
    // totalPrices() {
    //   let total = 0;
    //   this.dataShop.map((value, index) => {
    //     total += value.count * value.price;
    //   });
    //   // 将结果转化为带有千位分隔符的数字
    //   return total.toString().replace(/\B(?=(\d{3}) +$)/g, ",");
    // }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.removeModal {
  .modalContent,
  .modalFooter {
    display: flex;
    justify-content: center;
    .modalBtn {
      background: #ffffff;
      border-color: #ffffff;
      color: #ed4014;
      font-size: 18px;
    }
  }
  // 改变模态框原生样式
  /deep/ .ivu-modal-header {
    border-bottom: none !important;
  }
  /deep/ .ivu-modal-footer {
    border-top: none !important;
  }
}
</style>