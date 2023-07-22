// code your solution here
function superbowlWin(record) {
  const winObj = record.find((game) => game.result === "W");
  return winObj ? winObj.year : undefined;
}