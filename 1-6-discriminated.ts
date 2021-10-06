{
    // function: login --> success or fail
    type Success = {
        result: "success";
        response: {
            body: string;
        };
    };
    type Fail = {
        result: "fail";
        reason: string;
    };
    type LoginState = Success | Fail;

    function login(): LoginState {
        return {
            result: "success",
            response: {
                body: "logged in!",
            },
        };
    }

    function printLoginState(state: LoginState) {
        if (state.result === "success") {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
}
