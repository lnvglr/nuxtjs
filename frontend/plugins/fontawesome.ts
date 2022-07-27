import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEnvelope,
  faBriefcase,
  faTree,
  faWind,
  faPersonHiking,
  faArrowLeft,
  faArrowRight,
  faCalendar,
  faCalendarPlus,
  faQuoteRight,
  faStar,
  faCertificate,
  faScaleBalanced,
  faBoltLightning,
  faRoadBarrier,
  faEyeLowVision,
  faBath
} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(
  faBath,
  faEnvelope,
  faBriefcase,
  faTree,
  faWind,
  faEyeLowVision,
  faRoadBarrier,
  faScaleBalanced,
  faBoltLightning,
  faPersonHiking,
  faBoltLightning,
  faArrowLeft,
  faArrowRight,
  faCalendar,
  faCalendarPlus,
  faQuoteRight,
  faStar,
  faInstagram,
  faFacebook,
  faCertificate
)
// import { far } from '@fortawesome/free-regular-svg-icons'
// library.add(far)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)

})