function drawHexagonPattern(rows, cols) {
  const hexagon = [
      "  __  ",
      " /  \\ ",
      "/    \\",
      "\\    /",
      " \\__/ "
  ];

  for (let r = 0; r < 1; r++) {
      for (let i = 0; i < hexagon.length; i++) {
          let line = '';
          for (let c = 0; c < cols; c++) {
              line += hexagon[i];
          }
          console.log(line);
      }
  }
}

// Example usage:
drawHexagonPattern(4, 7); // For inputs: 4 7
drawHexagonPattern(3, 5); // For inputs: 3 5
