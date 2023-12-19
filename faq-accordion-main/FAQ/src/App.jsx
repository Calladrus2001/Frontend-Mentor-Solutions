import QnA from "./components/QnA";

import prop from './data';

function App() {

  return (
    <>
      <div className="w-full h-screen relative" >
        <div className="w-full h-1/3 z-0 static" style={{backgroundImage: 'url("./src/assets/images/background-pattern-desktop.svg")'}}/>
        <div className="w-full h-2/3 bg-purple-100 z-0 static"/>
        <div className="w-2/5 px-6 py-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-xl shadow-lg">
          <div className="flex items-center">
            <div className="h-10 w-10" style={{backgroundImage: 'url("./src/assets/images/icon-star.svg")'}}/>
            <div className="mx-4 text-center text-4xl font-extrabold text-dark-purple">FAQs</div>
          </div>
          <div className="flex flex-col mt-5">
            {
              Array.from(prop.entries()).map(([question, answer]) => (
                <div key={question}>
                  <QnA question={question} answer={answer} />
                  {question !== "How can I get help if i am stuck?" ? <hr/> : null}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App
