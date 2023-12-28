# Connect four

## Thoughts while developing:
- For the board, have a parent div with flex, and have 7 child divs. Each child is a flex-col-reverse for player moves.
- Have a 7x7 array and render images in each child using their indice's column.
- About the animation: calculate height of a counter and apply padding-top according to number of counters already in column.
- Run DFS to find winning condition.
- Make a separate Counter component, each having the respective svg and optional white circle in middle if this is part of winning lineup.