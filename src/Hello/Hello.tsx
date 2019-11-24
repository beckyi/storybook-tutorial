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
* 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
* - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
* - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
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
