var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var angular2_polymer_1 = require('@vaadin/angular2-polymer');
var hero_service_1 = require('./hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(_router, _heroService) {
        this._router = _router;
        this._heroService = _heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.goToHeroDetailById = function (id) {
        this._router.navigate(['HeroDetail', { id: id }]);
    };
    HeroesComponent.prototype.onSelectedItemsChanged = function (event) {
        var selectedIndex = event.target.selection.selected()[0];
        if (selectedIndex !== undefined) {
            this.goToHeroDetailById(this.heroes[selectedIndex].id);
        }
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            template: "\n    <vaadin-grid [items]=\"heroes\" (selected-items-changed)=\"onSelectedItemsChanged($event)\">\n      <table>\n        <colgroup>\n          <col name=\"id\">\n          <col name=\"name\">\n          <col name=\"birthday\">\n        </colgroup>\n      </table>\n    </vaadin-grid>\n  ",
            styles: ["\n    vaadin-grid {\n      height: 100%;\n    }\n  "],
            directives: [
                angular2_polymer_1.PolymerElement('vaadin-grid')
            ]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
})();
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map