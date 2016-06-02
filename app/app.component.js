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
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = '';
        this.isInChildView = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.subscribe(function () {
            var routeData = _this._router.currentInstruction.component.routeData;
            _this.title = routeData.get('title');
            _this.isInChildView = !routeData.get('root');
        });
    };
    AppComponent.prototype.goBack = function () {
        this._router.navigate(['Heroes']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <app-header-layout has-scrolling-region>\n      <app-header fixed>\n        <app-toolbar [class.raised]=\"isInChildView\">\n          <paper-icon-button icon=\"arrow-back\" *ngIf=\"isInChildView\" (click)=\"goBack()\"></paper-icon-button>\n          <div title spacer>{{title}}</div>\n        </app-toolbar>\n      </app-header>\n      <router-outlet></router-outlet>\n    </app-header-layout>\n  ",
            styles: ["\n    app-toolbar {\n      background: var(--primary-color);\n      color: var(--dark-theme-text-color);\n    }\n\n    app-toolbar.raised {\n      @apply(--shadow-elevation-4dp);\n    }\n\n    paper-icon-button {\n      position: absolute;\n      top: 12px;\n      left: 8px;\n    }\n  "],
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                angular2_polymer_1.PolymerElement('app-header-layout'),
                angular2_polymer_1.PolymerElement('app-header'),
                angular2_polymer_1.PolymerElement('app-toolbar'),
                angular2_polymer_1.PolymerElement('paper-icon-button')
            ],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                hero_service_1.HeroService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/heroes',
                name: 'Heroes',
                component: heroes_component_1.HeroesComponent,
                useAsDefault: true,
                data: {
                    title: 'All heroes',
                    root: true
                }
            },
            {
                path: '/heroes/:id',
                name: 'HeroDetail',
                component: hero_detail_component_1.HeroDetailComponent,
                data: {
                    title: 'Hero detail'
                }
            }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map