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
var HeroDetailComponent = (function () {
    function HeroDetailComponent(_routeParams, _heroService) {
        this._routeParams = _routeParams;
        this._heroService = _heroService;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get('id');
        this._heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            template: "\n    <div *ngIf=\"hero\">\n      <paper-input label=\"Name\" [(value)]=\"hero.name\"></paper-input>\n      <vaadin-date-picker label=\"Birthday\" [(value)]=\"hero.birthday\"></vaadin-date-picker>\n    </div>\n  ",
            directives: [
                angular2_polymer_1.PolymerElement('paper-input'),
                angular2_polymer_1.PolymerElement('vaadin-date-picker')
            ],
            styles: ["\n    :host {\n      display: block;\n      padding: 16px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, hero_service_1.HeroService])
    ], HeroDetailComponent);
    return HeroDetailComponent;
})();
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map