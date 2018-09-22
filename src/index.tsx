'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from './views/home';
import { HeadingComp } from './views/components/heading';
import { LabelComp } from './views/components/label';
// import { PanelComp } from './views/components/panel';
import { ButtonComp } from './views/components/button';
import { FieldComp } from './views/components/field';
import { TabSetComp } from './views/components/tabset';
import { NotFoundPage } from './views/notfound';

import './prereqs.scss';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/react.toolkit-guides/" component={HomePage} />
			<Route path="/react.toolkit-guides/heading" component={HeadingComp} />
			<Route path="/react.toolkit-guides/label" component={LabelComp} />
			{/* <Route path="/react.toolkit-guides/panel" component={PanelComp} /> */}
			<Route path="/react.toolkit-guides/field" component={FieldComp} />
			<Route path="/react.toolkit-guides/tabset" component={TabSetComp} />
			<Route path="/react.toolkit-guides/button" component={ButtonComp} />
			<Route component={NotFoundPage} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("react-view")
);
