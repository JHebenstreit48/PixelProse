import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JFRAndAsyncProfiler = () => {
  const markdownFilePath = 'Languages/Java/Advanced/DebugAndProfiling/JFRAndAsyncProfiler';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JFR & Async Profiler" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JFRAndAsyncProfiler;
