import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: colors.blue.lighten1,
				secondary: colors.blue.lighten4,
				accent: colors.pink.accent3
			},
			dark: {
				accent: colors.red.accent3
			},
		}
	},
	icons: {
		iconfont: 'mdi'
	}
});
