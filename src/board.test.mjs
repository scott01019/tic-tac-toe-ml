import * as board from './board.mjs';

const tests = [ 
];

tests.map(t => {
  console.log(`starting ${t}, ${t.toString(2)}`);
  console.log('x_turn', board.x_turn(t));
  console.log('o_turn', board.o_turn(t));
  console.log('moves x', board.moves(t, board.X_SPACE));
  console.log('moves o', board.moves(t, board.O_SPACE));
  console.log('wins x', board.wins(t, board.X_SPACE));
  console.log('wins o', board.wins(t, board.O_SPACE));
  console.log('valid_turn', board.valid_turn(t));
  console.log('valid_wins', board.valid_wins(t));
  console.log('valid_position', board.valid_position(t));
  console.log('valid_board', board.valid_board(t));
  console.log('x_win', board.x_win(t));
  console.log('o_win', board.o_win(t));
  console.log('\n\n');
});

if (process.argv[2]) {
  const t = process.argv[2];
  console.log(`starting ${t}, ${t.toString(2)}`);
  console.log('x_turn', board.x_turn(t));
  console.log('o_turn', board.o_turn(t));
  console.log('moves x', board.moves(t, board.X_SPACE));
  console.log('moves o', board.moves(t, board.O_SPACE));
  console.log('wins x', board.wins(t, board.X_SPACE));
  console.log('wins o', board.wins(t, board.O_SPACE));
  console.log('valid_turn', board.valid_turn(t));
  console.log('valid_wins', board.valid_wins(t));
  console.log('valid_position', board.valid_position(t));
  console.log('valid_board', board.valid_board(t));
  console.log('x_win', board.x_win(t));
  console.log('o_win', board.o_win(t));
  console.log('\n\n');
}
