const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      tasksArr: [],
      taskListIsVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasksArr.push(this.userInput);
    },
    removeTask(index) {
      this.tasksArr.splice(index, 1);
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
  computed: {
    showText() {
      return this.taskListIsVisible ? "Hide List" : "Show List";
    },
  },
});
app.mount("#assignment");
