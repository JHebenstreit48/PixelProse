import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
