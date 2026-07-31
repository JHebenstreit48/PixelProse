import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
