import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
window.Stimulus = Application.start()

Stimulus.register("comp-tab", class extends Controller {
  static targets = ["tab", "panel"];

  connect() {
    this.activeTabClasses = (this.data.get("activeTab") || "active").split(" ");
    this.inactiveTabClasses = (
      this.data.get("inactiveTab") || "inactive"
    ).split(" ");
    if (this.anchor)
      this.index = this.tabTargets.findIndex((tab) => tab.id === this.anchor);
    this.showTab();
  }

  change(event) {
    event.preventDefault();

    // If target specifies an index, use that
    if (event.currentTarget.dataset.index) {
      this.index = event.currentTarget.dataset.index;

      // If target specifies an index, use that
    } else if (event.currentTarget.dataset.id) {
      this.index = this.tabTargets.findIndex(
        (tab) => tab.id == event.currentTarget.dataset.id
      );

      // Otherwise, use the index of the current target
    } else {
      this.index = this.tabTargets.indexOf(event.currentTarget);
    }

    window.dispatchEvent(new CustomEvent("tsc:tab-change"));
  }

  showTab() {
    this.tabTargets.forEach((tab, index) => {
      const panel = this.panelTargets[index];
      if (!panel) {
        return;
      }
      if (index === this.index) {
        panel.classList.remove("hidden");
        tab.classList.remove(...this.inactiveTabClasses);
        tab.classList.add(...this.activeTabClasses);

        // Update URL with the tab ID if it has one
        // This will be automatically selected on page load
        if (tab.id) {
          event.preventDefault();
          location.hash = tab.id;
        }
      } else {
        panel.classList.add("hidden");
        tab.classList.remove(...this.activeTabClasses);
        tab.classList.add(...this.inactiveTabClasses);
      }
    });
  }

  get index() {
    return parseInt(this.data.get("index") || 0);
  }

  set index(value) {
    this.data.set("index", value >= 0 ? value : 0);
    this.showTab();
  }

  get anchor() {
    return document.URL.split("#").length > 1
      ? document.URL.split("#")[1]
      : null;
  }
})

Stimulus.register("animation-step", class extends Controller {
  static targets = ["step", "svg"];

  connect() {
    this.start();
  }

  start() {
    let self = this;
    setTimeout(() => {
      self.stepTargets[0].classList.remove('hidden');
      self.stepTargets[0].classList.remove('scale-0');
      self.svgTargets[0].classList.remove('hidden');
      self.svgTargets[0].classList.remove('scale-0');
      self.step1();
    }, 1000)
  }

  step1() {
    let self = this;
    setTimeout(() => {
      this.svgTargets[0].classList.add('hidden');
      this.stepTargets[1].classList.remove('hidden');
      this.stepTargets[1].classList.remove('scale-0');
      self.step2();
    }, 2000)
  }

  step2() {
    let self = this;
    setTimeout(() => {
      this.stepTargets[2].classList.remove('hidden');
      this.stepTargets[2].classList.remove('scale-0');
      this.svgTargets[1].classList.remove('scale-0');
      this.svgTargets[1].classList.remove('hidden');
      self.step3();
    }, 1000)
  }

  step3() {
    let self = this;
    setTimeout(() => {
      this.svgTargets[1].classList.add('hidden');
      this.stepTargets[3].classList.remove('hidden');
      this.stepTargets[3].classList.remove('scale-0');
      self.step4();
    }, 2000)
  }

  step4() {
    let self = this;
    setTimeout(() => {
      this.svgTargets[1].classList.remove('hidden');
      self.step5();
    }, 500)
  }

  step5() {
    let self = this;
    setTimeout(() => {
      this.svgTargets[1].classList.add('hidden');
      this.stepTargets[4].classList.remove('hidden');
      this.stepTargets[4].classList.remove('scale-0');
      self.step6();
    }, 2000)
  }

  step6() {
    let self = this;
    setTimeout(() => {
      this.svgTargets[1].classList.remove('hidden');
      self.step7();
    }, 500)
  }

  step7() {
    let self = this;
    setTimeout(() => {
      this.svgTargets[1].classList.add('hidden');
      this.stepTargets[5].classList.remove('hidden');
      this.stepTargets[5].classList.remove('scale-0');
      self.step8();
    }, 2000)
  }

  step8() {}
})
