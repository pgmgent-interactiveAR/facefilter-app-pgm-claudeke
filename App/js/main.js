(() => {
    const app = {
        init() {
            this.cacheElements();
            this.splashToFilter();
            this.showFilters();
            this.hideFilter();
            this.selectFilter();
        },
        cacheElements() {
            this.$splashPage = document.querySelector('.splash');
            this.$startBtn = document.querySelector('.btn--start');
            this.$filtersPage = document.querySelector('.filters');

            this.$showFiltersBtn = document.querySelector('.btn--up');
            this.$filtersBox = document.querySelector('.filters-box');
            this.$hideFiltersBtn = document.querySelector('.btn--down');
            this.$instructionOne = document.querySelector('.instruction__one');

            this.$filterBtns = document.querySelectorAll('.btn--filter');

            this.$allModels = document.querySelectorAll('.m');
        },
        splashToFilter() {
            this.$startBtn.addEventListener('click', (ev) => {
                this.$splashPage.classList.add('splash--hide');
                this.$filtersPage.classList.remove('filters--hide');
            });
        },
        showFilters() {
            this.$showFiltersBtn.addEventListener('click', (ev) => {
                this.$filtersBox.classList.remove('filters-box--hide');
                this.$showFiltersBtn.classList.add('btn--hide');
                this.$instructionOne.classList.add('hide');
            })
        },
        hideFilter() {
            this.$hideFiltersBtn.addEventListener('click', (ev) => {
                this.$filtersBox.classList.add('filters-box--hide');
                this.$showFiltersBtn.classList.remove('btn--hide');
            })
        },
        selectFilter() {
            this.$filterBtns.forEach(btn => {
                this.selectFilterFunction(btn);
            });

        },
        selectFilterFunction(btn) {
            btn.addEventListener('click', (ev) => {
                if (btn.classList.contains('btn--selected')) {
                    btn.classList.remove('btn--selected');
                    this.$allModels.forEach(model => {
                        if (model.classList.contains(btn.value)) {
                            model.setAttribute('scale', {
                                x: 0,
                                y: 0,
                                z: 0,
                            });
                        }
                    })
                } else {
                    btn.classList.add('btn--selected');
                    this.$allModels.forEach(model => {
                        if (model.classList.contains(btn.value)) {
                            this.setScaling(model)
                        }
                    })
                }
            });
        },
        setScaling(model) {
            if (model.classList.contains('m-glasses')) {
                model.setAttribute('animation', { 'property': 'scale',
                'to': {
                    x: 0.04,
                    y: 0.04,
                    z: 0.04
                }, 
                'dur': 300,
                'startEvents': 'startanim001',
                });
            } else if (model.classList.contains('m-shat') || model.classList.contains('m-ehat')) {
                model.setAttribute('animation', { 'property': 'scale',
                'to': {
                    x: 0.125,
                    y: 0.125,
                    z: 0.125
                },
                'dur': 300,
                'startEvents': 'startanim001',
                });
            } else if(model.classList.contains('m-mustache')) {
                model.setAttribute('animation', { 'property': 'scale',
                'to': {
                    x: 0.01,
                    y: 0.01,
                    z: 0.01
                },
                'dur': 300,
                'startEvents': 'startanim001',
                });
            } else if(model.classList.contains('m-nose')) {
                model.setAttribute('animation', { 'property': 'scale',
                'to': {
                    x: 0.07,
                    y: 0.07,
                    z: 0.07
                },
                'dur': 300,
                'startEvents': 'startanim001',
                });
            } else if(model.classList.contains('m-beard')) {
                model.setAttribute('animation', { 'property': 'scale',
                'to': {
                    x: 0.0035,
                    y: 0.004,
                    z: 0.004
                },
                'dur': 300,
                'startEvents': 'startanim001',
                });
            }
            model.emit(`startanim001`, null, false)
        },
    }
    app.init();
})();