/**
 * Let's make a game 🕹
 */

type Command = "up" | "down" | "left" | "right";
class Board {
    x = 0;
    y = 0;

    current_position(): number[] {
        return [this.x, this.y];
    }

    move(command: Command) {
        switch (command) {
            case "up":
                this.y += 1;
                break;
            case "down":
                this.y - +1;
                break;
            case "right":
                this.x += 1;
                break;
            case "left":
                this.y += 1;
                break;
            default:
                throw new Error("Unknown operation command");
        }
    }
}

const new_board = new Board();
console.log(new_board.current_position());
new_board.move("up");
console.log(new_board.current_position());
new_board.move("right");
console.log(new_board.current_position());
