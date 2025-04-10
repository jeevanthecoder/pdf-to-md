import { handleSubmission } from "../api";

interface OutputTextareaProps {
    output: string;
}

const OutputTextarea = ({output}: OutputTextareaProps) => {
  return (
    <div
      className="bg-light d-flex flex-row justify-content-between"
      style={{
        width: "100%",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        height: "100vh",
      }}
    >
      <div className="d-flex flex-column justify-content-between">
        <textarea className="form-control" value={output} style={{
          width: "38vw",
          height: "100vh",
        }}
        >
        </textarea>
      </div>
    </div>
  );
};

export default OutputTextarea;
