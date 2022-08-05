import "./App.css";
import React, { useState, useEffect, useMemo } from "react";
import Block from "./components/Block";

function App() {
  const [gameline, setGameline] = useState(["", "", "", ""]);
  const initialMarkState = ["", "", "", "", "", "", "", "", ""];
  const initialBoxValue = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const cross = () => {
    return (
      <svg
        width="332"
        height="325"
        viewBox="0 0 332 325"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="312" height="305" fill="none" />
        <rect width="312" height="305" fill="none" />
        <path
          className="crossline1"
          d="M316 21.0046C286.058 11.6868 259.861 37.1476 242.263 50.2613C198.714 82.7115 149.723 112.598 111.502 148.358C75.6901 181.862 50.1429 224.379 33.8317 264.352C28.364 277.751 30.4479 292.456 24 306"
          stroke="white"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          className="crossline2"
          d="M14 18C79.6721 66.0733 148.847 118.743 198.835 175.301C236.136 217.503 267.052 262.093 306 303"
          stroke="white"
          strokeWidth="18"
          strokeLinecap="round"
        />
      </svg>
    );
  };
  const tick = () => {
    return (
      <svg
        className="tick"
        width="491"
        height="368"
        viewBox="0 0 491 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="471" height="348" fill="none" />
        <rect width="471" height="348" fill="none" />
        <path
          d="M18 150.029C20.5251 179.681 22.0257 209.815 28.4789 239C34.0032 263.984 53.9749 294.061 56.1665 319.622C56.6371 325.111 54.334 347.522 62.5115 346.991C77.9771 345.987 94.1076 321.854 103.754 312.574C123.967 293.128 150.218 265.858 171 247C197.121 223.297 236.798 215.476 262 191C290 143 349 138 376 99C411 58 434.407 40.5315 471.479 17"
          stroke="white"
          strokeWidth="26"
          strokeLinecap="round"
        />
      </svg>
    );
  };
  const horizontalLine = () => {
    return (
      <svg
        className="horizontalLine"
        width="1250"
        height="103"
        viewBox="0 0 1250 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1250" height="103" fill="none" />
        <path
          d="M26.7629 51.5506C-8.66144 51.5506 97.6029 50.193 133.027 50.193C144.388 50.193 156.218 49.2803 167.493 50.7964C189.229 53.7188 210.902 52.6145 232.806 53.2098C285.323 54.6369 337.448 59.6957 390.053 59.6957C418.86 59.6957 447.668 58.3382 476.407 58.3382C486.085 58.3382 495.764 58.3382 505.443 58.3382C521.804 58.3382 538.18 58.1239 554.54 58.3382C562.361 58.4407 567.352 60.8802 574.526 62.1845C579.224 63.0387 584.787 62.4108 589.534 62.4108C607.836 62.4108 626.137 62.4108 644.439 62.4108C659.922 62.4108 675.226 61.6213 690.67 60.9778C703.03 60.4628 715.067 56.3837 727.399 55.6986C741.95 54.8902 755.942 52.0503 770.387 50.193C783.656 48.487 797.085 49.9292 810.283 48.0813C830.037 45.3158 850.03 46.1204 869.939 46.1204C923.637 46.1204 977.335 46.1204 1031.03 46.1204C1044.93 46.1204 1058.84 46.1204 1072.74 46.1204C1079.69 46.1204 1087.26 45.1116 1094.01 46.7992C1105.67 49.7157 1118.06 48.8355 1129.98 48.8355C1142.67 48.8355 1155.17 48.2027 1167.62 50.1176C1179.97 52.0178 1192.2 53.1908 1205.1 54.2656"
          stroke="white"
          strokeWidth="30"
          strokeLinecap="round"
        />
      </svg>
    );
  };
  const verticalLine = () => {
    return (
      <svg
        className="verticalLine"
        width="151"
        height="700"
        viewBox="0 0 151 1378"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="151" height="700" fill="none" />
        <path
          d="M74.9197 36.7621C74.9197 56.9179 79.7738 76.5751 79.7738 96.539C79.7738 120.157 78.1707 144.148 82.92 167.103C92.6548 214.154 87.8639 265.733 87.8639 313.803C87.8639 362.014 87.8639 410.225 87.8639 458.436C87.8639 475.934 83.0098 492.599 83.0098 510.303C83.0098 528.641 83.0098 546.978 83.0098 565.316C83.0098 602.221 80.2046 638.947 84.2683 675.521C87.7193 706.579 84.6279 739.695 84.6279 770.894C84.6279 805.922 84.6279 840.949 84.6279 875.976C84.6279 908.322 83.0098 940.53 83.0098 972.877C83.0098 1005.27 79.7738 1037.4 79.7738 1069.78C79.7738 1084.85 79.7738 1099.92 79.7738 1114.99C79.7738 1124.42 80.5232 1134.2 78.6951 1143.49C77.0316 1151.94 74.9197 1159.3 74.9197 1167.94C74.9197 1195.17 78.2772 1221.96 79.8637 1248.93C80.499 1259.73 83.0098 1269.76 83.0098 1280.66C83.0098 1290.79 83.0098 1300.92 83.0098 1311.04C83.0098 1323.16 81.3918 1359.48 81.3918 1347.36"
          stroke="white"
          strokeWidth="30"
          strokeLinecap="round"
        />
      </svg>
    );
  };
  // const audioo = new Audio(
  //   "/chalk1s.mp3"
  // );
  const audioo = new Audio(
    "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_office_chalk_draw_line_on_chalkboard_005_51975.mp3"
  );
  useEffect(() => {
    if (gameline[0] == "") {
      gameline[0] = horizontalLine();
      setGameline([...gameline]);
      audioo.play();
    }
    if (gameline[1] == "") {
      setTimeout(() => {
        gameline[1] = horizontalLine();
        setGameline([...gameline]);
        audioo.play();
      }, 1000);
    }
    if (gameline[2] == "") {
      setTimeout(() => {
        gameline[2] = verticalLine();
        setGameline([...gameline]);
        audioo.play();
      }, 2000);
    }
    if (gameline[3] == "") {
      setTimeout(() => {
        gameline[3] = verticalLine();
        setGameline([...gameline]);
        audioo.play();
      }, 3000);
    }
  }, []);
  // const timer = () => {
  // gameline[0] = horizontalLine();
  // setGameline([...gameline]);
  // const line1time = () => {
  //   clearTimeout(line1time);
  // };
  // setTimeout(() => {
  //   gameline[2] = horizontalLine();
  //   setGameline([...gameline]);
  // }, 2000);
  // setTimeout(() => {
  //   gameline[3] = horizontalLine();
  //   setGameline([...gameline]);
  // }, 3000);
  // ####################
  // old Code Version 1
  // setTimeout(() => {
  //   // console.log("lineNumber", lineNumber, "timeinMS", timeinMS);
  //   gameline[lineNumber] = line();
  //   setGameline([...gameline]);
  // }, timeinMS);
  // };

  const [mark, setMark] = useState([...initialMarkState]);
  const [boxvalue, setBoxvalue] = useState([...initialBoxValue]);
  const [player, setPlayer] = useState(1);
  const [counter, setCounter] = useState(0);
  const [winnerExist, setWinnerExist] = useState(false);

  const onClick = (position) => {
    console.log("Clicked on Position:" + position);
    console.log("onclick" + counter);
    if (mark[position] === "" && boxvalue[position] === 0) {
      setCounter(counter + 1);
      mark[position] = player === 1 ? tick : cross;
      boxvalue[position] = player === 1 ? 1 : 2;
      setMark([...mark]);
      setBoxvalue([...boxvalue]);
      setPlayer(player == 1 ? 0 : 1);
    } else {
      alert("Please Click on empty Box");
    }
  };
  const reset = () => {
    setMark([...initialMarkState]);
    setBoxvalue([...initialBoxValue]);
    setCounter(0);
    setWinnerExist(false);
  };

  useEffect(() => {
    console.log("useEffect" + counter);
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let c of combinations) {
      if (boxvalue[c[0]] == 1 && boxvalue[c[1]] === 1 && boxvalue[c[2]] === 1) {
        console.log("Player 1 win");
        setWinnerExist(true);

        setTimeout(() => {
          reset();
          alert("Yahoo! Player 'Tick ✔️' won the Game!!! ");
        }, 500);
      }

      if (boxvalue[c[0]] == 2 && boxvalue[c[1]] == 2 && boxvalue[c[2]] == 2) {
        console.log("Player 2 win");
        setWinnerExist(true);

        setTimeout(() => {
          reset();
          alert("Yahoo! Player 'Cross ❌' won the Game!!! ");
        }, 500);
      }
    }
    if (counter == 9 && winnerExist == false) {
      alert("Match is Draw");
      reset();
    }
  }, [counter, winnerExist, mark, boxvalue]);

  return (
    <>
      {/* {audioo.play()} */}
      {console.log("app.js")}

      <div className="board">
        <h1 className="heading">
          Tick Tac Toe Game Hand drawn
          <button className="button" onClick={() => reset()}>
            RESET
          </button>
        </h1>
        <div className="container">
          <div className="flx line2-parent">
            {/* {gameline[2] ? gameline[2] : timer(verticalLine, 2, 3000)} */}
            {gameline[2]}
          </div>
          <div className="flx line3-parent">
            {/* {gameline[3] ? gameline[3] : timer(verticalLine, 3, 4000)} */}
            {gameline[3]}
          </div>
          <div className="flx">
            <Block position={0} mark={mark[0]} onClick={onClick} />
            <Block position={1} mark={mark[1]} onClick={onClick} />
            <Block position={2} mark={mark[2]} onClick={onClick} />
          </div>
          <div className="flx vline1-parent">
            {/* {gameline[0] ? gameline[0] : timer(horizontalLine, 0, 1000)} */}
            {gameline[0]}
          </div>
          <div className="flx">
            <Block position={3} mark={mark[3]} onClick={onClick} />
            <Block position={4} mark={mark[4]} onClick={onClick} />
            <Block position={5} mark={mark[5]} onClick={onClick} />
          </div>
          <div className="flx vline2-parent">
            {/* {gameline[1] ? gameline[1] : timer(horizontalLine, 1, 2000)} */}

            {gameline[1]}
          </div>
          <div className="flx">
            <Block position={6} mark={mark[6]} onClick={onClick} />
            <Block position={7} mark={mark[7]} onClick={onClick} />
            <Block position={8} mark={mark[8]} onClick={onClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
