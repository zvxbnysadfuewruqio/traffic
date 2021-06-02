<template>
  <div class="login">
    <h1>2</h1>
    <p>1</p>
  </div>
</template>

<script>
// import { getCodeImg,getSysConfig } from "@/api/login";
// import Cookies from "js-cookie";
// import { encrypt, decrypt } from '@/utils/jsencrypt'
// import { setRequestId,setPublicKey } from '@/utils/auth'

export default {
  name: "Login",
  data() {
    return {
      codeUrl: "data:image/gif;base64,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",
      cookiePassword: "",
      loginForm: {
        username: "",
        password: "",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名不能为空" }
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" }
        ],
        code: [{ required: true, trigger: "change", message: "验证码不能为空" }]
      },
      loading: false,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  created() {
    // this.getCode();
    // this.getCookie();
    // this.getSysConfig();
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        this.codeUrl = "data:image/gif;base64," + res.img;
        this.loginForm.uuid = res.uuid;
      });
    },
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    },
    //获取烽景后台管理项目
    getSysConfig(){
      getSysConfig().then(response => {
        if(response && response.data){
          setRequestId(response.data.terminalId);
          setPublicKey(response.data.pubKey);
        }
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 });
            Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
            Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove('rememberMe');
          }
          this.$store
            .dispatch("Login", this.loginForm)
            .then((res) => {
              this.$router.push({ path: this.redirect || "/" });
            })
            .catch(() => {
              this.loading = false;
              this.getCode();
            });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">

</style>
