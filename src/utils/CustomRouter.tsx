import React from "react";
import { Router } from "react-router-dom";
import { ICustomRouter } from "./interfaces";
/**
 *  private route for authorization and authorized user in project.
 * @param param0 base route , children (jsx element) , history 
 * @returns a specific route 
 */
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