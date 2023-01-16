import { Express } from 'express';

export { getAllRoutesByCategory, parseRoutesToHtmlFormat };

interface RouteObj {
  route: string;
  method: string;
  fnName: string;
}

function getAllRoutesByCategory(server: Express, serverUrl: string, onlySpecificPath?: string) {
  const allRoutes = getAllExpressRoutesArr(server, onlySpecificPath);
  const routesByCategory = sorteRoutesByCategory(allRoutes, serverUrl);
  return routesByCategory;
}

function getAllExpressRoutesArr(server: Express, onlySpecificPath?: string): RouteObj[] {
  const fixRoute = (item: any, prefix?: string) => ({ route: `${prefix ? prefix : ''}${item.path}`, method: Object.keys(item.methods)[0], fnName: item.stack[0].name });

  const allRoutes: RouteObj[] = server._router.stack.reduce((acc: any, item: any) => {
    const curRoutes = [];

    if (item.route) {
      curRoutes.push(fixRoute(item.route));
    }

    if (item.name === 'router') {
      const regex = item.regexp.toString().split(' ')[0];
      const prefix = regex === '/^\\/?(?=\\/|$)/i' ? '' : regex.split('\\')[1];
      item.handle.stack.forEach((handler: any) => {
        if (handler.route) {
          curRoutes.push(fixRoute(handler.route, prefix));
        }
      });
    }

    return curRoutes.length > 0 ? [...acc, ...curRoutes] : acc;
  }, []);

  if (onlySpecificPath && onlySpecificPath !== '/') {
    return allRoutes.filter((item) => item.route.search(onlySpecificPath) > -1);
  }

  return allRoutes;
}

function sorteRoutesByCategory(routesArr: RouteObj[], serverUrl: string) {
  const allRoutesObj = routesArr.reduce((acc, item) => {
    const { route, method } = item;

    const pathLength = route.split('/').length;
    let pageCategory = '' as string;
    let shortRouteName = '';
    let finalRoute = '';

    if (pathLength === 1 && route === '*') {
      pageCategory = '*';
      shortRouteName = '/[any-other-url]';
      finalRoute = '/any-other-url';
    } else if (pathLength === 2) {
      pageCategory = '/';
      shortRouteName = route;
      finalRoute = route;
    } else if (pathLength > 2) {
      pageCategory = `/${route.split('/')[1]}`;
      const [, , ...tmp3] = route.split('/');
      shortRouteName = `/${tmp3.join('/')}`;
      finalRoute = route;
    } else {
      return acc;
    }

    const pageKey = `[${method.toString().toUpperCase()}] ${shortRouteName}`; //  ${fnName}
    const pageValue = `${serverUrl}${finalRoute}`;

    if (!acc[pageCategory]) {
      acc[pageCategory] = {};
    }
    acc[pageCategory][pageKey] = pageValue;
    return acc;
  }, {} as any);

  return allRoutesObj;
}

function parseRoutesToHtmlFormat(routesObj: any): string {
  const fixedLinkRoutesObj = Object.keys(routesObj).reduce((acc, item) => {
    for (const [route, link] of Object.entries(routesObj[item])) {
      if (!acc[item]) {
        acc[item] = {};
      }
      acc[item][route] = `<a href=${link}>${link}</a>`;
    }

    return acc;
  }, {} as any);

  const HtmlFormat = `
  <html>
  <head>
  <meta name="color-scheme" content="light dark">
  </head>
  <body>
  <h1 style="text-align: center">AVAILABLE ROUTES</h1>
  <pre style="word-wrap: break-word; white-space: pre-wrap;">${JSON.stringify(fixedLinkRoutesObj, null, 2)}</pre>
  </body>
  </html>
  `;
  return HtmlFormat;
}
