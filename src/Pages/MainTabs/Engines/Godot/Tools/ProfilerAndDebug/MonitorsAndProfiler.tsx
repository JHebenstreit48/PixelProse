import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MonitorsAndProfiler = () => {
  const markdownFilePath = 'Engines/Godot/Tools/ProfilerAndDebug/MonitorsAndProfiler';

  return (
    <>
      <PageLayout>
        <PageTitle title="Monitors & Profiler" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MonitorsAndProfiler;
