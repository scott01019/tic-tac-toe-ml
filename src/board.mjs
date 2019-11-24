import { bitCount } from './util.mjs';

// game space definition
export const SPACE             = 0b1111111111111111111;
export const X_SPACE 		   = 0b0111111111000000000;
export const O_SPACE 		   = 0b0000000000111111111;
export const TURN_SPACE 	   = 0b1000000000000000000;

// game states
export const INIT_BOARD        = 0b0000000000000000000;

// win spaces
export const TOP_ROW           = 0b0111000000111000000;
export const CENTER_ROW        = 0b0000111000000111000;
export const BOTTOM_ROW        = 0b0000000111000000111;
export const LEFT_COL          = 0b0100100100100100100;
export const CENTER_COL        = 0b0010010010010010010;
export const RIGHT_COL         = 0b0001001001001001001;
export const DIAG              = 0b0100010001100010001;
export const ANTI_DIAG         = 0b0001010100001010100;

export const WIN_ARR = [ TOP_ROW, CENTER_ROW, BOTTOM_ROW, LEFT_COL, CENTER_COL, RIGHT_COL, DIAG, ANTI_DIAG ];

export const x_turn = (board) => !(board & TURN_SPACE);

export const o_turn = (board) => board & TURN_SPACE;

export const condition = (board, condition) => (board & condition) === condition;

export const moves = (board, player_space) => bitCount(board & player_space);

export const wins = (board, player_space) => {
  return WIN_ARR
    .map(win_condition => condition(board, win_condition & player_space))
    .filter(win => win === true)
    .length;
}

export const valid_turn = (board) => {
  const total_x = moves(board, X_SPACE);
  const total_o = moves(board, O_SPACE);
  const is_x_turn = x_turn(board);
  return (total_x === total_o && is_x_turn)  || (total_x === total_o + 1 && !is_x_turn) && total_x <= 5 && total_x >= 0 && total_o <= 5 && total_o >= 0;
}

export const valid_wins = (board) => {
  const total_x_wins = wins(board, X_SPACE);
  const total_o_wins = wins(board, O_SPACE);
  return (total_x_wins === 1 && total_o_wins === 0) || (total_x_wins === 0 && total_o_wins === 1) || (total_x_wins === 0 && total_o_wins === 0);
}

export const valid_position = (board) => {
  const x_position = (board & X_SPACE) >> 9;
  const o_position = board & O_SPACE;
  return !(x_position & o_position);
}

export const valid_board = (board) => valid_turn(board) && valid_wins(board) && valid_position(board);

export const x_win = (board) => valid_board(board) && wins(board, X_SPACE) === 1;

export const o_win = (board) => valid_board(board) && wins(board, O_SPACE) === 1;
