import React from "react";
import BasicP from "../../../../components/Contents/BasicP";
import ChTitle from "../../../../components/Contents/ChTitle";
import CodeBlock from "../../../../components/Contents/CodeBlock";

function L2C2PlusDesc() {
  return (
    <div class="container flex flex-wrap justify-between mx-auto md:px-32 px-8 mb-12">
      <ChTitle>ERC20 vs CW20</ChTitle>
      <div class="lg:w-3/5 w-full block">
        <BasicP>
          Let's think about a situation where you've delegated amount of 100
          permissions and now you want to adjust that to 10. In ERC20 style,
          it's going to send a transaction that sets the approval to 10. It
          looks normal, but in fact it can be a problem.
        </BasicP>

        <BasicP>
          Let's say that a transaction that uses a 100 approval was made around
          the same time. If you're unlucky and this spending transaction is
          processed first, you give 10 more permissions instead of adjusting to
          10.
        </BasicP>

        <BasicP>
          The Ethereum community has also recognized this issue. As a result, it
          is recommend to use <CodeBlock>IncreaseAllowance</CodeBlock> and{" "}
          <CodeBlock>DecreaseAllowance</CodeBlock> instead of the existing{" "}
          <CodeBlock>Approve</CodeBlock>.
        </BasicP>

        <BasicP>
          <CodeBlock>IncreaseAllowance</CodeBlock> and{" "}
          <CodeBlock>DecreaseAllowance</CodeBlock> are specifications that
          appeared after the establishment of the ERC20 standard, so they are
          not ERC20 standards. However, on the CW20, these two are standard.
        </BasicP>
      </div>
    </div>
  );
}

export default L2C2PlusDesc;
