import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const JFRAndAsyncProfiler = () => {
  const markdownFilePath = 'Languages/Java/Advanced/DebugAndProfiling/JFRAndAsyncProfiler';

  return (
    <>
      <PageLayout>
        <PageTitle title="JFR & Async Profiler" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JFRAndAsyncProfiler;
