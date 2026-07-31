import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
