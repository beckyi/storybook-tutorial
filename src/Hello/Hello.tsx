import React from "react";
// import PropTypes from "prop-types";

type HelloProps = {
  /** Halo */
  name: string;
  big?: boolean; //? undefined일 수 있음
  onHello?: () => void; //void 아무값이 아님
  onBye?: () => void; //
};

/**
 * 안녕하세요라는 컴포넌트를 만들었어요.
 */
const Hello = ({ name, big, onHello, onBye }: HelloProps) => {
  //any 아무 값 가능
  return (
    <div>
      {big
        ? <h1>
            안녕하세요, {name}!
          </h1>
        : <p>
            안녕하세요, {name}!
          </p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

// Hello.propTypes = {
//   /** 보여주고 싶은 이름 */
//   name: PropTypes.string.isRequired,
//   /** 크기 */
//   big: PropTypes.bool,
//   /** 함수 */
//   onHello: PropTypes.func,
//   /** 함수 */
//   onBye: PropTypes.func
// }

Hello.defaultProps = {
  big: false
};

export default Hello;
