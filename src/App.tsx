import { Redirect, Route } from 'react-router-dom';import {IonApp, IonItem, IonRouterOutlet, setupIonicReact} from '@ionic/react';import { IonReactRouter } from '@ionic/react-router';import { HomePage } from './pages/HomePage';import DetailsMovie from './pages/DetailsMovie'import { DetailsPerson } from './pages/DetailsPerson'import '@ionic/react/css/core.css';import '@ionic/react/css/normalize.css';import '@ionic/react/css/structure.css';import '@ionic/react/css/typography.css';import '@ionic/react/css/padding.css';import '@ionic/react/css/float-elements.css';import '@ionic/react/css/text-alignment.css';import '@ionic/react/css/text-transformation.css';import '@ionic/react/css/flex-utils.css';import '@ionic/react/css/display.css';import './theme/variables.css';import React from "react";setupIonicReact();const App: React.FC = () => {    return (        <IonApp>            <IonReactRouter>                <IonRouterOutlet>                    <Route                        exact path="/"                        component={HomePage}                    />                    <Route                        path="/movie/:id"                        component={DetailsMovie}                    />                    <Route                        path="/person/:id"                        component={DetailsPerson}                    />                    <Route render={() => <Redirect to="/" />} />                </IonRouterOutlet>            </IonReactRouter>        </IonApp>    );}export default App;