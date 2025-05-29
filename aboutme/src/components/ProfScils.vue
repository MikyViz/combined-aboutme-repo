<template>    <v-container>
        <h3 class="section-title mb-4">{{ $t('skills.javascript') }}</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item v-for="(JavaScriptItem, index) in JavaScript" :key="index">
                <v-card class="skill-card">
                    <v-card-title class="skill-title">{{ JavaScriptItem.name }}</v-card-title>
                    <v-card-item>
                        <v-img :src="JavaScriptItem.img" height="200px" contain></v-img>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
    <v-container>
        <h3 class="section-title mb-4">{{ $t('skills.frontend') }}</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item v-for="(FrontendItem, index) in Frontend" :key="index">
                <v-card class="skill-card">
                    <v-card-title class="skill-title">{{ FrontendItem.name }}</v-card-title>
                    <v-card-item>
                        <v-img :src="FrontendItem.img" height="200px" contain></v-img>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
    <v-container>
        <h3 class="section-title mb-4">{{ $t('skills.backend') }}</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item v-for="(BackendItem, index) in Backend" :key="index">
                <v-card class="skill-card">
                    <v-card-title class="skill-title">{{ BackendItem.name }}</v-card-title>
                    <v-card-item>
                        <v-img :src="BackendItem.img" height="200px" contain></v-img>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
    <v-container>
        <h3 class="section-title mb-4">{{ $t('skills.mobile') }}</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item v-for="(MobileItem, index) in Mobile" :key="index">
                <v-card class="skill-card">
                    <v-card-title class="skill-title">{{ MobileItem.name }}</v-card-title>
                    <v-card-item>
                        <v-img :src="MobileItem.img" height="200px" contain></v-img>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
    <v-container>
        <h3 class="section-title mb-4">{{ $t('skills.general') }}</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item v-for="(GeneralItem, index) in General" :key="index">
                <v-card class="skill-card">
                    <v-card-title class="skill-title">{{ GeneralItem.name }}</v-card-title>
                    <v-card-item>
                        <v-img :src="GeneralItem.img" height="200px" contain></v-img>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const JavaScript = ref([
    { name: 'JavaScript', img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png' },
    { name: 'Vue.js', img: 'https://blog.adroitguru.com/storage/30/conversions/vuejs_logo-cover.jpg' },
    { name: 'React.js', img: 'https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png' },
]);

const Frontend = ref([
    { name: 'HTML', img: 'https://clipartcraft.com/images/html5-logo-png-transparent-5.png' },
    { name: 'CSS', img: "https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png" },
    { name: 'Sass/SCSS', img: "https://1000logos.net/wp-content/uploads/2020/08/Sass-Logo-800x500.png" },
    { name: 'Vuetify', img: 'https://i.pinimg.com/originals/54/eb/37/54eb3761225655f0bf633c88edf95d88.png' },
    { name: 'Bootstrap', img: 'https://th.bing.com/th/id/R.6b234c34c642799cf95dc76269a3d1b6?rik=vOF8cgXdn674fw&pid=ImgRaw&r=0' },
    { name: 'Shadcn UI', img: 'https://avatars.githubusercontent.com/u/139895814?s=280&v=4' }
]);

const Backend = ref([
    { name: 'JavaScript', img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png' },
    { name: 'Node.js', img: 'https://apipilot.com/wp-content/uploads/2023/01/4.png' },
    { name: 'Sequelize DB', img: 'https://th.bing.com/th/id/OIP.dcQcS2jeF7zNTNWygTlYoAHaIk?rs=1&pid=ImgDetMain' },
    { name: 'MySQL', img: 'https://th.bing.com/th/id/OIP.lIIc_svaWdGdEJuEk7TBlgHaHa?rs=1&pid=ImgDetMain' }
]);

const Mobile = ref([
    { name: 'Flutter', img: 'https://th.bing.com/th/id/R.599374cd00c0636a8bb8de28e33cb151?rik=gp93XXbxSOBe6Q&pid=ImgRaw&r=0' },
    { name: 'Dart', img: 'https://vectorseek.com/wp-content/uploads/2022/02/Dart-Programming-Language-Logo-Vector-2048x2048.jpg' }
]);

const General = ref([
    { name: 'GitHub', img: 'https://th.bing.com/th/id/OIP.mtsk3fQ_BRemFidhkel3dAHaEK?rs=1&pid=ImgDetMain' },
    { name: 'Docker', img: 'https://seekvectorlogo.com/wp-content/uploads/2018/12/docker-vector-logo.png' },
    { name: 'Postman', img: 'https://mms.businesswire.com/media/20210806005076/en/761650/23/postman-logo-vert-2018.jpg' },
    { name: 'nix', img: 'https://iconape.com/wp-content/files/hi/345416/png/nixos-linux-logo.png' },
    { name: 'idx', img: 'https://assets.techrepublic.com/uploads/2023/08/tr081123-project_idx-logo_hero-770x213.jpg' },
]);
</script>

<style scoped>
.section-title {
  font-family: var(--font-heading) !important;
  font-weight: 600;
  color: var(--v-theme-primary);
  text-align: center;
}

.skill-card {
  margin: 0 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.skill-title {
  font-family: var(--font-heading) !important;
  font-weight: 500;
  text-align: center;
}
</style>