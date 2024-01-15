import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const app = {
    data(){
        return{
            api_url: "https://ec-course-api.hexschool.io/v2",
            api_path: "dollob_api",
            products: [],
            temp : {} // 用於儲存 "查看細節" Data
            }
        },
        methods:{
            checkAdmin(){
                const api = `${this.api_url}/api/user/check`;
                axios.post(api).then((res) => {
                    this.getData()
                }).catch((err) => {
                    console.dir(err.response.data.message);
                    window.location = 'index.html';
                })
            },
            getData(){
                const api = `${this.api_url}/api/${this.api_path}/admin/products`;
                axios.get(api).then((res) => {
                    const { products } = res.data;
                    this.products = products;
                }).catch((err) => {
                    alert(err.response.data.message);
                })
            },
            OpenProducts(item){
                this.temp = item;
            }
        },
        mounted(){
            // 取出 Token
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
            axios.defaults.headers.common.Authorization = token;

            this.checkAdmin();
        },
        
    }

    Vue.createApp(app).mount('#app');