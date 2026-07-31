import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const DebuggerAndBreakpoints = () => {
  const markdownFilePath = 'Engines/Godot/Tools/ProfilerAndDebug/DebuggerAndBreakpoints';

  return (
    <>
      <PageLayout>
        <PageTitle title="Debugger & Breakpoints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebuggerAndBreakpoints;
