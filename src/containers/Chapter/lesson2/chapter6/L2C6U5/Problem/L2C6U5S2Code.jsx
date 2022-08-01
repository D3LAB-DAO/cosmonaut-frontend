import React, { useEffect, useRef, useState } from "react";
import { AnsTabAble } from "../../../../../../components/CodeEditor/AnsTabAble";
import { AnsTabDis } from "../../../../../../components/CodeEditor/AnsTabDis";
import EditorCode from "../../../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../../../components/CodeEditor/EditorCodeHeader";
import EditorDesc from "../../../../../../components/CodeEditor/EditorDesc";
import EditorResult from "../../../../../../components/CodeEditor/EditorResult";
import { MobileEnv } from "../../../../../../components/CodeEditor/MobileEnv";
import { ProblemTab } from "../../../../../../components/CodeEditor/ProblemTab";
import { Loading } from "../../../../../../components/Common/Loading";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Hint from "../../../../../../components/Contents/Hint";
import HintButton from "../../../../../../components/Contents/HintButton";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import Problem from "../../../../../../components/Contents/Problem";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";

const L2C6U5S2Code = ({ difRes, difLoading, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);

  const [code, setCode] = useState("");
  const [files, setFiles] = useState({});
  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
  }, [code]);
  console.log(files);

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            Let's write a code that updates the <CodeBlock>logo</CodeBlock>.
          </BasicP>
          <BasicP>
            The <CodeBlock>save</CodeBlock> part is already written.
          </BasicP>
          <BasicP>
            All you have to do is substitute <CodeBlock>matched logo</CodeBlock>{" "}
            into the variable to be stored.
          </BasicP>
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>It's just one line.</li>
                <li>
                  We are using <CodeBlock>marketing_info</CodeBlock> as a
                  variable to update
                  <CodeBlock>MARKETING_INFO</CodeBlock>.
                </li>
                <li>Then: Do it yourself!</li>
              </ListStyle>
            </>
          )}
        </HintButton>
      </EditorDesc>

      {/* Code Editor */}
      <div class="w-full lg:w-3/5 md:mx-0 ">
        <MobileEnv />
        <EditorCode>
          {difLoading ? (
            <Loading />
          ) : (
            <div class="mb-1 px-4">
              <EditorCodeHeader>
                <ProblemTab
                  disabled={tab === "problem"}
                  onClick={async e => {
                    e.preventDefault();
                    setTab("problem");
                  }}
                >
                  Problem
                </ProblemTab>
                {difSuccess ? (
                  <AnsTabAble
                    disabled={tab === "answer"}
                    onClick={async e => {
                      e.preventDefault();
                      setTab("answer");
                    }}
                  />
                ) : (
                  <AnsTabDis />
                )}
              </EditorCodeHeader>
              <div class="mx-auto mb-1">
                {/* Mobile Version */}
                <div class="md:hidden block w-full bg-black py-4 px-5 h-quiz">
                  <h2 class="text-xl font-extrabold text-blue-500">
                    Mobile Environment not supported
                  </h2>
                </div>

                {/* Editor */}
                <EditorResult
                  defaultLanguage="rust"
                  defaultValue={code1}
                  path={tab}
                  onChange={async e => await setCode(e)}
                  onMount={editor => (editorRef.current = editor)}
                  files={files}
                  // onBuild={onBuild}
                />
              </div>
            </div>
          )}
        </EditorCode>
      </div>
    </>
  );
};

export default L2C6U5S2Code;

const code1 = `
pub fn execute_upload_logo(
  deps: DepsMut,
  _env: Env,
  info: MessageInfo,
  logo: Logo,
) -> Result<Response, ContractError> {
  let mut marketing_info = MARKETING_INFO
      .may_load(deps.storage)?
      .ok_or(ContractError::Unauthorized {})?;

  verify_logo(&logo)?;

  if marketing_info
      .marketing
      .as_ref()
      .ok_or(ContractError::Unauthorized {})?
      != &info.sender
  {
      return Err(ContractError::Unauthorized {});
  }

  LOGO.save(deps.storage, &logo)?;

  let logo_info = match logo {
      Logo::Url(url) => LogoInfo::Url(url),
      Logo::Embedded(_) => LogoInfo::Embedded,
  };

  // Question 1: update/upload logo
  // Do it yourself!

  MARKETING_INFO.save(deps.storage, &marketing_info)?;

  let res = Response::new().add_attribute("action", "upload_logo");
  Ok(res)
}`;
