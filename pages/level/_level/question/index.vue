<template>
  <v-container class="pa-0">
    <v-img src="/q.jpg">
      <v-card flat style="background-color:transparent">
        <v-card-text>
          <v-container fluid>
            <v-slide-x-transition>
              <v-row v-for="(question, index) in questions" :key="index" v-if="question.show">
                <v-col cols="12">
                  <p style="margin-top:200px" class="pr-3">
                    <span class="pr-5">{{question.desc}}</span>
                  </p>
                </v-col>
                <v-col @click="validate(question,'a')" cols="6" style="min-height:100px">
                  <v-btn block style="height:100%">{{ question.a }}</v-btn>
                </v-col>
                <v-col @click="validate(question,'b')" cols="6" style="min-height:100px">
                  <v-btn block style="height:100%">{{ question.b }}</v-btn>
                </v-col>
                <v-col @click="validate(question,'c')" cols="6" style="min-height:100px">
                  <v-btn block style="height:100%">{{question.c}}</v-btn>
                </v-col>
                <v-col @click="validate(question,'d')" cols="6" style="min-height:100px">
                  <v-btn block style="height:100%">{{question.d}}</v-btn>
                </v-col>
              </v-row>
            </v-slide-x-transition>
          </v-container>
        </v-card-text>
      </v-card>
    </v-img>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      ex7: "red",
      ex8: "primary",
      index: 0,
      questions: [
        {
          a: "a",
          b: "b",
          c: "c",
          d: "d",
          answer: "b",
          desc: "سوالاتی که مینوسیم؟",
          show: true,
        },
        {
          a: "a",
          b: "b",
          c: "c",
          d: "d",
          answer: "a",
          desc: "سلام گل پسر؟",
          show: false,
        },
        {
          a: "a",
          b: "b",
          c: "c",
          d: "d",
          answer: "c",
          desc: "خوبی؟",
          show: false,
        },
      ],
    };
  },

  methods: {
    validate(question, choice) {
      let x = event.target;
      if (choice == question.answer) {
        x.style.height = "100%";
        x.style.backgroundColor = "green";
        setTimeout(() => {
          if (this.index + 1 == this.questions.length) {
            this.$router.push("/level/" + this.$route.params.level + "/karton");
          }
          this.questions[this.index].show = false;
          this.questions[++this.index].show = true;
          x.style.backgroundColor = "#f5f5f5";
        }, 1000);
      } else {
        x.style.height = "100%";
        x.style.backgroundColor = "red";
      }
    },

    resetColor() {},
  },

  computed: {
    // question() {
    //   for (let i = 0; i < this.questions.length; i++)
    //     if (this.questions[i].show) {
    //       this.index = i;
    //       return this.questions[i];
    //     }
    // },
  },
};
</script>

<style>
</style>