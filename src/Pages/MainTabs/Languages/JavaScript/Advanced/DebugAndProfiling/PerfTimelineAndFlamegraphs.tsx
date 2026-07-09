import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PerfTimelineAndFlamegraphs = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/DebugAndProfiling/PerfTimelineAndFlamegraphs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Perf Timeline & Flamegraphs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerfTimelineAndFlamegraphs;
