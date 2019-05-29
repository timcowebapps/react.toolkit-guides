'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from './views/home';
import { HeadingComp } from './views/components/heading';
import { LabelComp } from './views/components/label';
import { PanelComp } from './views/components/panel';
import { ButtonComp } from './views/components/button';
import { CheckboxComp } from './views/components/checkbox';
import { FormGroupComp } from './views/components/form-group';
import { BreadcrumbComp } from './views/components/breadcrumb';
import { TabSetComp } from './views/components/tabset';
import { NotFoundPage } from './views/notfound';
import { RouteConstants } from './shared/routeconstants';

import './prereqs.scss';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path={RouteConstants.Home} component={HomePage} />
			<Route path={RouteConstants.Heading} component={HeadingComp} />
			<Route path={RouteConstants.Label} component={LabelComp} />
			<Route path={RouteConstants.Panel} component={PanelComp} />
			<Route path={RouteConstants.FormGroup} component={FormGroupComp} />
			<Route path={RouteConstants.Breadcrumb} component={BreadcrumbComp} />
			<Route path={RouteConstants.Tabset} component={TabSetComp} />
			<Route path={RouteConstants.Button} component={ButtonComp} />
			<Route path={RouteConstants.Checkbox} component={CheckboxComp} />
			<Route component={NotFoundPage} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("react-view")
);
