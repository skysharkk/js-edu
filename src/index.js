/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = { family: 4 }
) {
  let hoursKnowingJS = 800;
  let hoursKnowingBasic = 500;

  if (knowsProgramming === true) {
    return Math.ceil(hoursKnowingJS / config[focus]);
  } else if (knowsProgramming === false) {
    return Math.ceil((hoursKnowingJS + hoursKnowingBasic) / config[focus]);
  }
};
