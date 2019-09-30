module.exports = function zeros(expression) {
  const divs = expression.split('*');
  let result = 0;
  const multiply = {
    '2': 0,
    '5': 0
  }

  for (let i = 0; i < divs.length; i++) {
    let value;
    let double = true;

    if (divs[i].charAt(divs[i].length - 2) !== '!') {
      double = false;
    }

    // --!--
    if (!double) {
      value = +divs[i].slice(0, divs[i].length - 1);
      let tens = Math.floor(value / 10)


      multiply['2'] += tens * 7;
      multiply['5'] += tens * 2;
      multiply['5'] += Math.floor(value / 25)


      if (value % 10 > 4) {
        multiply['5']++;
      }

      if (value % 10 > 7) {
        multiply['2']+=7;
      } else if (value % 10 > 5) {
        multiply['2']+=4;
      } else if (value % 10 > 3) {
        multiply['2']+=3;
      } else if (value % 10 > 1) {
        multiply['2']+=1;
      }
    } 

    // --!!--
    if (double) {
      value = +divs[i].slice(0, divs[i].length - 2);
      let tens = Math.floor(value / 10)

      if (value % 2 === 0) {
        multiply['2'] += tens * 7;
        multiply['5'] += tens;

        multiply['5'] += Math.floor(value / 50)

        if (value % 10 > 7) {
          multiply['2']+=7;
        } else if (value % 10 > 5) {
          multiply['2']+=4;
        } else if (value % 10 > 3) {
          multiply['2']+=3;
        } else if (value % 10 > 1) {
          multiply['2']+=1;
        }
      }

      if (value % 2 === 1) {
        multiply['5'] += tens;

        if (value > 74) {
          multiply['5'] += 2;
        } else if (value > 24) {
          multiply['5'] += 1;
        }

        if (value % 10 > 4) {
          multiply['5']++;
        }
      }  
    }
  }

  if (multiply['2'] > multiply['5']) {
    result+=multiply['5'];
  }

  if (multiply['5'] >= multiply['2']) {
    result+=multiply['2'];
  }

  return result;
}
