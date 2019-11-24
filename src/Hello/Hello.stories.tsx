import React from "react";
import Hello from "./Hello";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import mdx from "./Hello.mdx";

export default {
  title: "components|basic/Hello", // 컴포넌트를 basic안에 Hello를 만들겠다.
  component: Hello,
  decorators: [withKnobs], // 애드온(knobs) 적용
  parameters: {
    // docs가 참고해서 문서를 만듬
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    docs: {
      page: mdx
    }
  }
};

export const hello = () => {
  // 애드온(knobs) 적용
  const _name = text("name", "Storybook");
  const _big = boolean("big", false);
  return (
    <Hello
      name={_name}
      big={_big}
      onHello={action("onHello")}
      onBye={action("onBye")}
    />
  );
};

hello.story = {
  name: "default"
};

export const standard = () => <Hello name="Storybook" />;

export const big = () => <Hello name="Storybook" big />;
