module.exports = function(robot) {
  robot.hear('/testing/i', function(res) {
    res.send('I see you');
  });
}