class Router {

    constructor(routes)
    {
        // Atributo
        this.routes = routes;
        this._loadInitialRoute();
    }

    loadRoutes(...URL)
    {

        const MatchURL = this._MatchURL(URL)

        // RUTA
        const url = `/${URL.join('/')}`;
        history.pushState({}, 'this works', url);

        const routerOutElm = document.querySelectorAll('[data-router]')[0];
        routerOutElm.innerHTML = MatchURL.template;
    }

    _MatchURL( URL )
    {

        const MatchedRoute = this.routes.find((route) => { 
            const RoutePathSegs = route.path.split('/').slice(1);
            
            if( RoutePathSegs.length !== URL.length )
            {
                return false;
            }

            return RoutePathSegs.every( (RoutePathSeg, i) => RoutePathSeg === URL[i])        
        });

         return MatchedRoute
    }

    _loadInitialRoute()
    {
        // IDENTIFICAR Y SEPARAR RUTA
        const PathNameSplit = window.location.pathname.split('/');
        const PathSegs = PathNameSplit.length > 1 ? PathNameSplit.slice(1) : '';

        debugger

        this.loadRoutes(...PathSegs);
    }

}