{
    /**
     * Union Types: OR
     * 활용도가 높고 많이 사용하는 타입
     */

    type Direction = "left" | "right" | "up" | "down";
    function move(direction: Direction) {
        console.log(direction);
    }
    move("right");
    move("left");

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 8;

    // function: login --> success or fail
    type Success = {
        response: {
            body: string;
        };
    };
    type Fail = {
        reason: string;
    };
    type LoginState = Success | Fail;

    function login(): LoginState {
        return {
            response: {
                body: "logged in!",
            },
        };
    }

    function printLoginState(state: LoginState) {
        if ("response" in state) {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
}
