
import Vue from 'vue'

const dateEn = (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric', hour12: true, hour: '2-digit', minute: '2-digit'})
}
const dateEsLa = (value) => {
  const date = new Date(value)
  return date.toLocaleString(['es-419'], {month: 'short', day: '2-digit', year: 'numeric', hour12: false, hour: '2-digit', minute: '2-digit'})
}

Vue.filter('dateEn', dateEn)
Vue.filter('dateEsLa', dateEsLa)
