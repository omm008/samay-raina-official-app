import React, { useState } from 'react';
import { motion } from 'framer-motion';

// 4x3 Pocket Chess with 2 Pawns and 1 King per Player
const PocketChess = () => {
  const rows = 4;
  const cols = 3;
  const squareSize = 16; // Fixed size for equal square blocks (px)
  const initialBoard = [
    ['bp', 'bk', 'bp'], // Black: pawn, king, pawn
    ['', '', ''],       // Empty
    ['', '', ''],       // Empty
    ['wp', 'wk', 'wp']  // White: pawn, king, pawn
  ];

  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState('white'); // 'white' or 'black'
  const [selected, setSelected] = useState(null); // {row, col}
  const [gameOver, setGameOver] = useState(null);

  // Helper: Check if move is valid
  const isValidMove = (fromRow, fromCol, toRow, toCol, player) => {
    const piece = board[fromRow][fromCol];
    if (!piece || piece[0] !== (player === 'white' ? 'w' : 'b')) return false;
    const isKing = piece[1] === 'k';
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);

    // Bounds check
    if (toRow < 0 || toRow >= rows || toCol < 0 || toCol >= cols) return false;

    // Pawn moves
    if (!isKing) {
      const direction = player === 'white' ? -1 : 1;
      if (toCol === fromCol && toRow === fromRow + direction && !board[toRow][toCol]) return true; // Forward
      if (colDiff === 1 && toRow === fromRow + direction && board[toRow][toCol] && board[toRow][toCol][0] !== piece[0]) return true; // Capture
      return false;
    }

    // King moves: any direction, 1 square, capture if enemy
    if (rowDiff <= 1 && colDiff <= 1 && (rowDiff + colDiff > 0)) {
      if (!board[toRow][toCol] || board[toRow][toCol][0] !== piece[0]) return true;
    }
    return false;
  };

  // Handle user click (select and move for white)
  const handleClick = (row, col) => {
    if (gameOver) return;
    if (turn === 'black') return; // AI's turn

    if (selected) {
      if (isValidMove(selected.row, selected.col, row, col, 'white')) {
        const newBoard = [...board.map(r => [...r])];
        newBoard[row][col] = newBoard[selected.row][selected.col];
        newBoard[selected.row][selected.col] = '';
        setBoard(newBoard);
        setSelected(null);
        setTurn('black');
        checkGameOver(newBoard);
        setTimeout(() => aiMove(newBoard), 500);
      } else {
        setSelected(null);
      }
    } else if (board[row][col] && board[row][col][0] === 'w') {
      setSelected({ row, col });
    }
  };

  // Minimax for AI (black)
  const minimax = (currentBoard, depth, isMaximizing) => {
    const result = checkWinner(currentBoard);
    if (result || depth === 0) {
      return evaluateBoard(currentBoard);
    }

    let bestScore = isMaximizing ? -Infinity : Infinity;
    const moves = getAllMoves(currentBoard, isMaximizing ? 'black' : 'white');

    for (let move of moves) {
      const newBoard = makeMove(currentBoard, move);
      const score = minimax(newBoard, depth - 1, !isMaximizing);
      bestScore = isMaximizing ? Math.max(score, bestScore) : Math.min(score, bestScore);
    }
    return bestScore;
  };

  // Get all possible moves
  const getAllMoves = (currentBoard, player) => {
    const moves = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (currentBoard[r][c] && currentBoard[r][c][0] === (player === 'white' ? 'w' : 'b')) {
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              if (dr === 0 && dc === 0) continue;
              const tr = r + dr;
              const tc = c + dc;
              if (tr >= 0 && tr < rows && tc >= 0 && tc < cols && isValidMove(r, c, tr, tc, player)) {
                moves.push({ fromRow: r, fromCol: c, toRow: tr, toCol: tc });
              }
            }
          }
        }
      }
    }
    return moves;
  };

  // Make move on board copy
  const makeMove = (currentBoard, { fromRow, fromCol, toRow, toCol }) => {
    const newBoard = [...currentBoard.map(r => [...r])];
    newBoard[toRow][toCol] = newBoard[fromRow][fromCol];
    newBoard[fromRow][fromCol] = '';
    return newBoard;
  };

  // Evaluate board (positive for black; kings worth more)
  const evaluateBoard = (currentBoard) => {
    let score = 0;
    currentBoard.forEach(row => {
      row.forEach(cell => {
        if (cell === 'bp') score += 1;
        if (cell === 'bk') score += 5; // King higher value
        if (cell === 'wp') score -= 1;
        if (cell === 'wk') score -= 5;
      });
    });
    return score;
  };

  // AI selects best move (depth 3)
  const aiMove = (currentBoard) => {
    let bestScore = -Infinity;
    let bestMove = null;
    const moves = getAllMoves(currentBoard, 'black');
    for (let move of moves) {
      const newBoard = makeMove(currentBoard, move);
      const score = minimax(newBoard, 3, false);
      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }
    if (bestMove) {
      const newBoard = makeMove(currentBoard, bestMove);
      setBoard(newBoard);
      setTurn('white');
      checkGameOver(newBoard);
    }
  };

  // Check winner: Prioritize king capture, then all pieces
  const checkWinner = (currentBoard) => {
    let whiteKing = 0, blackKing = 0;
    let whitePieces = 0, blackPieces = 0;
    currentBoard.forEach(row => row.forEach(cell => {
      if (cell === 'wk') whiteKing++;
      if (cell === 'bk') blackKing++;
      if (cell && cell[0] === 'w') whitePieces++;
      if (cell && cell[0] === 'b') blackPieces++;
    }));

    if (blackKing === 0) return 'white'; // White wins if black's king is captured
    if (whiteKing === 0) return 'black'; // Black wins if white's king is captured
    if (whitePieces === 0) return 'black'; // Fallback: all white pieces captured
    if (blackPieces === 0) return 'white'; // Fallback: all black pieces captured
    return null;
  };

  const checkGameOver = (currentBoard) => {
    const winner = checkWinner(currentBoard);
    if (winner) {
      const message = winner === 'white' 
        ? 'White wins! (Black\'s king captured or all pieces lost)' 
        : 'Black wins! (White\'s king captured or all pieces lost)';
      setGameOver(message);
    }
  };

  // Reset
  const resetGame = () => {
    setBoard(initialBoard);
    setTurn('white');
    setSelected(null);
    setGameOver(null);
  };

  // Render piece (emojis)
  const renderPiece = (piece) => {
    if (piece === 'wp') return '♙';
    if (piece === 'wk') return '♔';
    if (piece === 'bp') return '♟';
    if (piece === 'bk') return '♚';
    return '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center py-8 px-4"
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-6 text-white text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Play Pocket Chess
      </motion.h2>
      
      {/* Game Status Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-4 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-red-700/30"
      >
        <div className="flex items-center gap-3 text-white">
          <motion.div
            animate={{ rotate: turn === 'white' ? 0 : 180 }}
            transition={{ duration: 0.5 }}
            className="text-2xl"
          >
            {turn === 'white' ? '♔' : '♚'}
          </motion.div>
          <span className="font-semibold">
            {gameOver ? '🏁 Game Over!' : `${turn === 'white' ? 'Your' : 'AI'} Turn`}
          </span>
          {turn === 'black' && !gameOver && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full"
            />
          )}
        </div>
      </motion.div>

      {/* Chess Board */}
      <motion.div 
        className="w-64 sm:w-72 md:w-80 lg:w-96 aspect-[3/4] flex items-center justify-center bg-gradient-to-br from-amber-800 to-amber-900 p-3 sm:p-4 rounded-2xl shadow-2xl border-2 sm:border-4 border-amber-700 mx-auto"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-3 gap-1 h-full w-full rounded-lg overflow-hidden shadow-inner">
          {board.map((row, rowIndex) =>
            row.map((piece, colIndex) => {
              const isLight = (rowIndex + colIndex) % 2 === 0;
              const isSelected = selected && selected.row === rowIndex && selected.col === colIndex;
              const canMove = selected && isValidMove(selected.row, selected.col, rowIndex, colIndex, 'white');
              
              return (
                <motion.div
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleClick(rowIndex, colIndex)}
                  className={`
                    flex w-full h-full items-center justify-center text-xl sm:text-2xl md:text-3xl cursor-pointer aspect-square relative
                    ${isLight ? 'bg-amber-100' : 'bg-amber-600'}
                    ${isSelected ? 'ring-2 sm:ring-4 ring-yellow-400 ring-inset' : ''}
                    ${canMove && !gameOver ? 'bg-green-400 animate-pulse' : ''}
                    hover:brightness-110 transition-all duration-200
                  `}
                  whileHover={{ 
                    scale: gameOver ? 1 : 1.1,
                    zIndex: 10
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (rowIndex * cols + colIndex) * 0.05 }}
                >
                  {piece && (
                    <motion.span
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15,
                        delay: 0.1
                      }}
                      className="drop-shadow-lg"
                    >
                      {renderPiece(piece)}
                    </motion.span>
                  )}
                  
                  {/* Move indicator */}
                  {canMove && !gameOver && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-3 h-3 bg-green-600 rounded-full opacity-70" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })
          )}
        </div>
      </motion.div>
      
      {/* Game Over Message */}
      {gameOver && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-4 bg-gradient-to-r from-red-600/20 to-yellow-400/20 backdrop-blur-md rounded-xl border border-yellow-400/30 text-center"
        >
          <p className="text-lg md:text-xl text-white font-semibold">{gameOver}</p>
        </motion.div>
      )}
      
      {/* Reset Button */}
      <motion.button 
        onClick={resetGame} 
        className="mt-6 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(220, 60, 34, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        🔄 Reset Game
      </motion.button>
    </motion.div>
  );
};

export default PocketChess;
