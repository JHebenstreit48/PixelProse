import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
