(() => {
    const app = {
        init() {
            this.cacheElements();
            this.splashToFilter();
            this.showFilters();
            this.hideFilter()
        },
        cacheElements() {
            this.$splashPage = document.querySelector('.splash');
            this.$startBtn = document.querySelector('.btn--start');
            this.$filtersPage = document.querySelector('.filters');

            this.$showFiltersBtn = document.querySelector('.btn--up');
            this.filtersBox = document.querySelector('.filters-box');
            this.$hideFiltersBtn = document.querySelector('.btn--down');
        },
        splashToFilter() {
            this.$startBtn.addEventListener('click', (ev) => {
                this.$splashPage.classList.add('splash--hide');
                this.$filtersPage.classList.remove('filters--hide');
            });
        },
        showFilters() {
            this.$showFiltersBtn.addEventListener('click', (ev) => {
                this.filtersBox.classList.remove('filters-box--hide');
                this.$showFiltersBtn.classList.add('btn--hide');
            })
        },
        hideFilter() {
            this.$hideFiltersBtn.addEventListener('click', (ev) => {
                this.filtersBox.classList.add('filters-box--hide');
                this.$showFiltersBtn.classList.remove('btn--hide');
            })
        }
    }
    app.init();
})();
