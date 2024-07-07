<template>
    <v-container>
        <h3>JavaScript</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item v-for="(JavaScriptItem, index) in JavaScript" :key="index">
                <v-card>
                    <v-card-title>{{ JavaScriptItem.name }}</v-card-title>
                    <v-card-item>
                        <v-img :src="JavaScriptItem.img" height="200px"></v-img>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
    <v-container>
        <h3>FrontEnd</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item v-for="(FrontendItem, index) in Frontend" :key="index">
                <v-card>
                    <v-card-title>{{ FrontendItem.name }}</v-card-title>
                    <v-card-item>
                        <v-img :src="FrontendItem.img" height="200px"></v-img>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
    <v-container>
        <h3>BackEnd</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item v-for="(BackendItem, index) in Backend" :key="index">
                <v-card>
                    <v-card-title>{{ BackendItem.name }}</v-card-title>
                    <v-card-item>
                        <v-img :src="BackendItem.img" height="200px"></v-img>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
    <v-container>
        <h3>Mobile</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item v-for="(MobileItem, index) in Mobile" :key="index">
                <v-card>
                    <v-card-title>{{ MobileItem.name }}</v-card-title>
                    <v-card-item>
                        <v-img :src="MobileItem.img" height="200px"></v-img>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
    <v-container>
        <h3>General</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item v-for="(GeneralItem, index) in General" :key="index">
                <v-card>
                    <v-card-title>{{ GeneralItem.name }}</v-card-title>
                    <v-card-item>
                        <v-img :src="GeneralItem.img" height="200px"></v-img>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>
<script setup>
import { ref } from 'vue';

const JavaScript = ref([
    { name: 'JavaScript', img: 'https://networksynapse.net/wp-content/uploads/2020/11/js-1232x616.png' },
    { name: 'Vue.js', img: 'https://blog.adroitguru.com/storage/30/conversions/vuejs_logo-cover.jpg' }]);
const Frontend = ref([
    { name: 'HTML', img: 'https://www.clipartkey.com/mpngs/m/210-2104705_html-logo-png-transparent-background.png' },
    { name: 'CSS', img: "https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png" },
    { name: 'Sass/SCSS', img: "https://th.bing.com/th/id/R.09fa297368663ab9063c785331427a40?rik=0q3Gm%2fWut4VIjw&pid=ImgRaw&r=0" },
    { name: 'Vuetify', img: 'https://i.pinimg.com/originals/54/eb/37/54eb3761225655f0bf633c88edf95d88.png' },
    { name: 'Bootstrap', img: 'https://th.bing.com/th/id/R.6b234c34c642799cf95dc76269a3d1b6?rik=vOF8cgXdn674fw&pid=ImgRaw&r=0' },
    { name: 'Shadcn UI', img: 'https://avatars.githubusercontent.com/u/139895814?s=280&v=4' }
]);
const Backend = ref([
    { name: 'JavaScript', img: 'https://networksynapse.net/wp-content/uploads/2020/11/js-1232x616.png' },
    { name: 'Node.js', img: 'https://apipilot.com/wp-content/uploads/2023/01/4.png' },
    { name: 'Sequelize DB', img: 'https://th.bing.com/th/id/OIP.dcQcS2jeF7zNTNWygTlYoAHaIk?rs=1&pid=ImgDetMain' },
    { name: 'MySQL', img: 'https://th.bing.com/th/id/OIP.lIIc_svaWdGdEJuEk7TBlgHaHa?rs=1&pid=ImgDetMain' }]);
const Mobile = ref([{ name: 'Flutter', img: 'https://th.bing.com/th/id/R.599374cd00c0636a8bb8de28e33cb151?rik=gp93XXbxSOBe6Q&pid=ImgRaw&r=0' },
{ name: 'Dart', img: 'https://vectorseek.com/wp-content/uploads/2022/02/Dart-Programming-Language-Logo-Vector-2048x2048.jpg' }
]);
const General = ref([
    { name: 'GitHub', img: 'https://th.bing.com/th/id/OIP.mtsk3fQ_BRemFidhkel3dAHaEK?rs=1&pid=ImgDetMain' },
    { name: 'Docker', img: 'https://seekvectorlogo.com/wp-content/uploads/2018/12/docker-vector-logo.png' }]);

</script>