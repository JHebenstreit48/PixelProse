import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DebuggerAndBreakpoints = () => {
  const markdownFilePath = 'Engines/Godot/Tools/ProfilerAndDebug/DebuggerAndBreakpoints';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Debugger & Breakpoints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebuggerAndBreakpoints;
