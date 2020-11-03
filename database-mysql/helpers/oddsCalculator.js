module.exports = {

  oddsCalculation: function (result, odds, wagered) {

    if (result === 'Won') {
      odds = parseInt(odds);
      if (odds < 0) {
        return (wagered / Math.abs(odds)) * 100;
      } else {
        return wagered * (odds / 100);

      }
    } else {
      return -wagered;
    }
  }

}