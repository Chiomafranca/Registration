import './App.css';
import Header from './components/Header';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <>
     <div>
       <Header />
     </div>

      <div className="w-full ml-0 mr-0 mt-1 rounded-2xl border-black/30 border-2-b">

        <div className="flex justify-between text-xl">

          <div className="border-e-2 border-l-2 border-b border-black/30 w-screen text-center rounded-lg">
            <h1 className="ml-3">Search for Existing Record</h1>
          </div>
          
          <div className="border-e-2 text-center w-full rounded-md border-l-2 border-black/30">
            <h1 className="mt-2 border-r border-b rounded border-l max-w-[300px] border-black/30 mx-auto">
              <b>Basic Information Entries</b>
            </h1>
          </div>
          <div className="border-e-2 border-l-2 text-center border-b border-black/30 w-full rounded-lg">
            <h1>Attendance History</h1>
          </div>
        </div>

        <div className="grid grid-rows-none lg:grid-cols-12 gap-20 lg:gap-0 max-w-[1600px] h-screen mx-auto">
          <div className="lg:col-span-5">
            <RightSide />
          </div>
          <div className="lg:col-span-7">
            <LeftSide />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
