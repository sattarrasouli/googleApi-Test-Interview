import { History } from "history";
import React, { ReactNode } from "react";
import { Router } from "react-router-dom";

interface ICustomRouter {
    basename?: string,
    children: ReactNode,
    history: History
}

const CustomRouter =
    ({
        basename,
        children,
        history,
    }:
        ICustomRouter) => {
        const [state, setState] = React.useState({
            action: history.action,
            location: history.location,
        });

        React.useLayoutEffect(() => history.listen(setState), [history]);

        return (
            <Router
                basename={basename}
                children={children}
                location={state.location}
                navigationType={state.action}
                navigator={history}
            />
        );
    };
export default CustomRouter