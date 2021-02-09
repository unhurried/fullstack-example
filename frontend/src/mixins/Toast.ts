import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Toast extends Vue {
  toast(message: string, variant?: 'success' | 'danger') {
    this.$bvToast.toast(message, {
      variant,
      toaster: 'b-toaster-top-center',
      autoHideDelay: 1500,
      noCloseButton: true,
      noHoverPause: true,
      toastClass: 'mt-4',
    });
  }
}
