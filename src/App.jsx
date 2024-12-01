import Contacts from './sections/Contacts';
import Skills from "./sections/Skills.jsx";
import Navbar from "./components/Navbar.jsx";
import PastExperience from "./sections/PastExperience.jsx";
import DividerLine from "./components/DividerLine.jsx";
import Introduction from "./sections/Introduction.jsx";

function App() {
	return (
		<div className='p-4 text-white flex flex-col gap-6 max-w-screen-sm m-auto'>
			<Navbar />
			<Introduction />
			<DividerLine/>
			<PastExperience />
			<DividerLine/>
			<Skills />
			<DividerLine/>
			<Contacts/>
		</div>
	);
}

export default App;
