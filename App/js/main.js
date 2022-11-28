(() => {
    const app = {
        init() {
            this.cacheElements();
            this.splashToFilter();

        },
        cacheElements() {
            this.$splashPage = document.querySelector('.splash');
            this.$startBtn = document.querySelector('.btn--start');
            this.$filtersPage = document.querySelector('.filters');

            this.$showFiltersBtn = document.querySelector('.show-filters');
        },
        splashToFilter() {
            this.$startBtn.addEventListener('click', (ev) => {
                this.$splashPage.classList.add('splash--hide');
                this.$filtersPage.classList.remove('filters--hide');
            });
        },
        showFilters() {
            this.$showFiltersBtn.addEventListener('click', (ev) => {
                
            })
        }
    }
    app.init();
})();
